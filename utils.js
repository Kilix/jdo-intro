export const hasVoted = () => {
  try {
    const voted = JSON.parse(localStorage.getItem('voted'));
    return voted !== null ? differenceInMinutes(new Date(), new Date(voted.date)) < 2 : false;
  } catch (e) {
    return false;
  }
};
export const setVote = () => {
  try {
    localStorage.setItem('voted', JSON.stringify({ voted: true, date: new Date() }));
  } catch (e) {
    return false;
  }
};
