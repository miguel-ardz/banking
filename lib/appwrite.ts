"use server";
import { Client, Account, Databases, Users, TablesDB } from "node-appwrite";
import { cookies } from "next/headers";

// fetch session for regular user
export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = (await cookies()).get("appwrite-session");

  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}
// fetch session for our Node admin
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);
  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    },
    get tablesDB() {
      return new TablesDB(client);
    }
  };
}

/*
What Appwrite is: It's a backend service, it handles things like user accounts, databases, 
and authentication so you don't have to build all that from scratch.
What the appwrite.ts file does: It's the bridge between your Next.js app and Appwrite. 
Like a phone-line:
createSessionClient() — connects to Appwrite on behalf of a logged in user using their session cookie
createAdminClient() — connects to Appwrite with admin privileges using a secret key, for things like creating new users
*/