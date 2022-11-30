const SUPABASE_URL = 'https://mjwfhlyotmsokgnuhrbi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qd2ZobHlvdG1zb2tnbnVocmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMTA4NjQsImV4cCI6MTk4MzY4Njg2NH0.59u5grTqRbWsLqKJ26MiKt2xRJVQ5w3o-GhxYYUQvMA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function fetchAllItems() {
    const response = await client
        .from('shoplist2')
        .select('*')
        .order('item')
        .match({ user_id: getUser().id });

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function createItem(item) {
    const response = await client
        .from('shoplist2')
        .insert({ item });

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function deleteAllItems() {
    const response = await client
        .from('shoplist2')
        .delete()
        .match({ user_id: getUser().id });

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function buyItem(item) {
    const response = await client
        .from('shoplist2')
        .update({ bought: true })
        .match({ id: item.id });

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('./auth');
}


/* test console logs */

// console.log('response', fetchAllItems());