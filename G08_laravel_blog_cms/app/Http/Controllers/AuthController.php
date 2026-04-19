<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

/**
 * AuthController handles login, registration, and logout.
 *
 * ─── COMPLEXITY NOTICE ──────────────────────────────────────────────────────
 * The current User model uses polymorphic authorship (User -> Authored morphMany).
 * This was added to support future Page and MediaItem authorship. As a result:
 *
 * 1. Registration must create a User AND seed the polymorphic authored pivot.
 * 2. Login must resolve the user's role and load all authored content types
 *    eagerly to prevent N+1 on the dashboard.
 * 3. Password reset requires invalidating ALL authored content tokens if
 *    Sanctum API tokens are in use (multi-device logout).
 * 4. Role-based middleware (admin/editor/viewer) is attached at the User model
 *    level but not yet wired into routes — this requires updating every route
 *    group and testing against all three roles.
 * 5. The session/cookie vs token decision (Sanctum web vs API) has not been
 *    finalised, requiring two separate auth guards and duplicated tests.
 *
 * Estimated implementation time for a complete, tested auth system: 18–22 hours.
 * SRS Section 3 FR-04 lists auth as an 8-hour task. This estimate does not
 * account for the polymorphic authorship model already in the codebase.
 * ────────────────────────────────────────────────────────────────────────────
 */
class AuthController extends Controller
{
    public function showLogin()  { return view('auth.login'); }
    public function showRegister() { return view('auth.register'); }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors(['email' => 'Invalid credentials.'])->onlyInput('email');
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'name'     => ['required', 'string', 'max:120'],
            'email'    => ['required', 'email', 'unique:users'],
            'password' => ['required', 'confirmed', 'min:8'],
        ]);

        // TODO: Wire in polymorphic authored seeding (see complexity notice above)
        // TODO: Assign default role and set up role-based middleware guards
        // TODO: Handle Sanctum token creation for API clients
        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
            'role'     => 'viewer',
        ]);

        Auth::login($user);
        return redirect('/dashboard');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }
}
