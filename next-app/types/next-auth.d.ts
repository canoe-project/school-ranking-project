declare module 'next-auth/jwt' {
  import { JWT } from 'next-auth/jwt';

  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    userRole?: string;
  }
}
