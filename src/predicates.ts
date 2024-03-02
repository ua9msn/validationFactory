import { PredicateFactory } from "./types";

type MaxLenPredicateFactory = PredicateFactory<{ max: number }, string>;
type RequiredPredicateFactory = PredicateFactory<void, unknown>;
type RegexpPredicateFactory = PredicateFactory<{ regexp: string }, string>;
type WordsNumPredicateFactory = PredicateFactory<
  { min: number; max: number },
  string
>;

const maxlen: MaxLenPredicateFactory = (args) => (value) =>
  value.length <= args.max;

const required: RequiredPredicateFactory = () => (value) => {
  if (value == null) {
    return false;
  }

  if (typeof value === "string") {
    return value !== "";
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (typeof value === "object" && value != null) {
    return Object.keys(value).length > 0;
  }

  return false;
};

const regexp: RegexpPredicateFactory = (args) => {
  const r = new RegExp(args.regexp);

  return (value) => r.test(value);
};

const wordsNum: WordsNumPredicateFactory = (args) => (value) => {
  const words = value.trim().split(" ").filter(Boolean);
  return words.length >= args.min && words.length <= args.max;
};

export const PredicateWarehouse = {
  maxlen,
  required,
  regexp,
  wordsNum,
};
