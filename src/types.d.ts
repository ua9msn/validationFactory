export type RequiredRule = {
  fId: string;
  fn: "required";
  message: string;
};

export type MaxlenRule = {
  fId: string;
  fn: "maxlen";
  message: string;
  args: {
    max: number;
  };
};

export type RegexpRule = {
  fId: string;
  fn: "regexp";
  fields: string;
  message: string;
  args: {
    regexp: string;
  };
};

export type WordsNumRule = {
  fId: string;
  fn: "wordsNum";
  message: string;
  args: {
    min: number;
    max: number;
  };
};

export type ValidationRule =
  | RequiredRule
  | MaxlenRule
  | RegexpRule
  | WordsNumRule;

export type Predicate<V> = (value: V) => boolean;

export type PredicateFactory<T, V> = (args: T) => Predicate<V>;

export type ValidationError = {
  message: string;
};
