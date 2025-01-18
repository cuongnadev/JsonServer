import { LowSync } from 'lowdb';

declare module 'json-server' {
  interface Router {
    db: LowSync;
  }
}
