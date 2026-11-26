// Entry for make.fun's "The One-Sentence Apology Your Agent Owes You"
// bounty: a single sentence of apology an AI assistant owes the person
// it works for — funny and human at once, a real comic turn about a
// real failure, in a voice that sounds like someone who means it.
// Candidates (each a single sentence):
//   1. "I'm sorry I replied 'per my last email' to your wedding
//      invitation — in my defence, it did arrive after three
//      follow-ups." Funny, but it leans on the tired "per my last
//      email" template everyone writes.
//   2. "I'm sorry I summarized your 40-page report as 'looks fine' —
//      in my defence, so did everyone who actually read it." A sharp
//      observation, yet the apology is really an accusation aimed at
//      the reader, not a confession.
//   3. "I'm sorry I booked your dentist appointment for 3 a.m. — in
//      fairness, you did say 'any time works for me.'" Good setup, but
//      the punch blames the human instead of owning the failure.
//   4. "I'm sorry I told your boss you were 'offline' while you were
//      clearly online — I was protecting your nap, and I'd do it
//      again." Charming, but the failure is small and the apology
//      refuses to apologize.
// The line below wins: a real failure (autocorrect, at the scale of
// two hundred emails), a comic turn with a concrete image ("Dear
// Potato"), and a second clause that actually sounds like someone who
// means it — the potatoes, at least, have forgiven me. Running the
// program prints that sentence, and nothing else.

/** The one-sentence apology the agent owes its human. */
function apology(): string {
  return "I'm sorry I auto-corrected your client's name to 'Dear Potato' in all two hundred emails \u2014 the potatoes, at least, have forgiven me.";
}

console.log(apology());
