<?php
namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::published()->with(['author','category'])->latest('publish_at')->paginate(9);
        return view('posts.index', compact('posts'));
    }

    public function show(string $slug)
    {
        $post = Post::where('slug',$slug)->firstOrFail();
        $comments = $post->comments()->where('approved',true)->with('author')->latest()->get();
        return view('posts.show', compact('post','comments'));
    }

    public function create() { return view('posts.create', ['categories' => Category::all()]); }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'    => 'required|max:255',
            'body'     => 'required',
            'status'   => 'in:draft,published',
            'category_id' => 'nullable|exists:categories,id',
        ]);
        $data['user_id'] = Auth::id();
        Post::create($data);
        return redirect()->route('posts.index')->with('success', 'Post created.');
    }
}
