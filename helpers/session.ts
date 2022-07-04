import { tags } from "./dados";

const sessionKey = `@${tags.key}/session-lead`;

export async function getSessao() {
  const sessionLead = await localStorage.getItem(sessionKey);
  if (sessionLead) {
    const session = await JSON.parse(sessionLead);

    if (session) {
      localStorage.removeItem(sessionKey);
      return session;
    }
  }
  return false;
}

export function setSessao(dados) {
  localStorage.setItem(sessionKey, JSON.stringify(dados));
}
