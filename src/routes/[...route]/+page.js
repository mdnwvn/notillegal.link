import { Base64 } from 'js-base64';
import { redirect } from '@sveltejs/kit';

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function redirecturl(params) {
  let path = params.route.split('/')
  let decoded = Base64.decode(path[path.length - 1])
  if(isValidHttpUrl(decoded)) return decoded;
  return "/invalid"
}
export async function load({ params }) {
  throw redirect(307, redirecturl(params));
}