import { matchSorter as orgMatchSorter } from "match-sorter";
//
function matchSorter(items, value, key = undefined) {
  return orgMatchSorter(items, value, {
    keys: key,
    threshold: orgMatchSorter.rankings.CONTAINS,
  });
}

export default matchSorter;
