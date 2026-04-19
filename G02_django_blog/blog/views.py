from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from .models import Post, Category, Comment
from .forms import PostForm, CommentForm

def post_list(request):
    qs = Post.objects.filter(status='published').select_related('author','category')
    paginator = Paginator(qs, 6)
    page = paginator.get_page(request.GET.get('page'))
    return render(request,'blog/post_list.html',{'posts':page,'categories':Category.objects.all()})

def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug, status='published')
    comments = post.comments.filter(active=True)
    form = CommentForm()
    if request.method == 'POST' and request.user.is_authenticated:
        form = CommentForm(request.POST)
        if form.is_valid():
            c = form.save(commit=False); c.post=post; c.author=request.user; c.save()
            return redirect('post_detail', slug=slug)
    return render(request,'blog/post_detail.html',{'post':post,'comments':comments,'form':form})

@login_required
def post_create(request):
    form = PostForm(request.POST or None, request.FILES or None)
    if form.is_valid():
        post = form.save(commit=False); post.author=request.user; post.save()
        return redirect('post_detail', slug=post.slug)
    return render(request,'blog/post_form.html',{'form':form})
