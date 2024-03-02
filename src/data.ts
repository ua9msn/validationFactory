import { ValidationRule } from "./types";

export const values: Record<string, string> = {
  fio: "Иванов Иван Иванович asdfgs",
  phone: "+7 999 999 99 99",
  city: "Москва, ул. Ленина, д. 1",
  email: "bO5jB@example.com",
};

export const VTypes: Record<
  keyof typeof values,
  "string" | "number" | "boolean"
> = {
  fio: "string",
  phone: "string",
  city: "string",
  email: "string",
};

export const Rules: ValidationRule[] = [
  {
    fId: "fio",
    fn: "required",
    message: "Поле обязательно для заполнения!",
  },
  {
    fId: "fio",
    fn: "wordsNum",
    message: "Как минимум фамилия и имя",
    args: {
      max: 3,
      min: 2,
    },
  },

  {
    fId: "fio",
    fn: "maxlen",
    message: "Слишком длинное ФИО",
    args: {
      max: 150,
    },
  },
  {
    fId: "phone",
    fn: "required",
    message: "Поле обязательно для заполнения",
  },
  {
    fId: "city",
    fn: "required",
    message: "Поле обязательно для заполнения",
  },
  {
    fId: "email",
    fn: "required",
    message: "Поле обязательно для заполнения",
  },
];
