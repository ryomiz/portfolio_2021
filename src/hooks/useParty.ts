import party from 'party-js'

export const useParty = (result: boolean): void => {
  if (result) {
    party.confetti(document.body, {
      spread: 50,
      count: 100,
      size: 1,
    })
  }
}
