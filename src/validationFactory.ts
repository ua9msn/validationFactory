import { Rules, values } from "./data";
import { PredicateWarehouse } from "./predicates";
import { ValidationRule } from "./types";

export function ValidationFactory(rule: ValidationRule) {
  const { fn, fId, message } = rule;

  const args = "args" in rule ? rule.args : undefined;

  const functionCreator = PredicateWarehouse[fn];

  //@ts-expect-error args is unknown type
  const predicate = functionCreator(args);

  return function VFn(values: Record<string, unknown>) {
    const value = values[fId];
    //@ts-expect-error predicate is unknown type
    const isValid = predicate(value);
    return isValid ? { fId, error: "" } : { fId, error: message };
  };
}

const Validations = Rules.map(ValidationFactory);

const errors = Validations.every((fn) => fn(values));

console.log(errors);
