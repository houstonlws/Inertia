import { Schema } from 'yup';

type Field = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  errors?: string[];
  value?: Ref<string, string>;
  rules?: Schema<any>;
};

type Form = { [key: string]: Field };

type ResponseType = 'error' | 'success' | 'info' | 'warning' | null;

type ResponseMessage = {
  value: String | null;
  type: ResponseType;
};
