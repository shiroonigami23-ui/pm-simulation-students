<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class User extends Authenticatable
{
    protected $fillable = ['name', 'email', 'password', 'bio', 'avatar', 'role'];
    protected $hidden   = ['password', 'remember_token'];
    protected $casts    = ['email_verified_at' => 'datetime', 'password' => 'hashed'];

    public function posts(): HasMany { return $this->hasMany(Post::class); }

    // Polymorphic — User can author Posts, Pages, and Comments
    // This polymorphic authorship model was added mid-development and couples
    // the auth system to content types in a non-standard way.
    public function authored(): MorphMany { return $this->morphMany(Authored::class, 'authorable'); }
}
