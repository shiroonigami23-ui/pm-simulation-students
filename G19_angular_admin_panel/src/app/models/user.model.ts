export interface User {
  _id:       string;
  name:      string;
  email:     string;
  role:      'admin' | 'editor' | 'viewer';
  active:    boolean;
  createdAt: string;
}
