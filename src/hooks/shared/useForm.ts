import type React from 'react';
import { useCallback, useState } from 'react';

type ObjectState = {
  [key: string | number | symbol]: unknown;
};

interface Props<T extends ObjectState> {
  initialState: T;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  validate?: (initialState: T) => T;
}

function useForm<T extends ObjectState>({
  initialState,
  onSubmit,
  validate,
}: Props<T>) {
  const [data, setData] = useState(initialState);
  const [touched, setTouched] = useState<Partial<T>>({});
  const [errors, setErrors] = useState<Partial<T>>({});

  /**
   * @description
   * A function is executed when onChange event is fired on input component.
   * Name attr of input component should not be empty to make handleChange function work.
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  /**
   * @description
   * A function is executed when onBlur event is fired on input component.
   * Name attr of input component should not be empty to make handleBlur function work.
   */
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }, []);

  /**
   * @description
   * A function is executed when form is submitted
   */
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setTouched(
        Object.keys(data).reduce(
          (acc, cur) => ({ ...acc, [cur]: true }),
          {} as Partial<T>,
        ),
      );

      const validationErrors = validate?.(data) || {};

      if (Object.values(validationErrors).some((value) => value)) {
        setErrors(validationErrors);
        return;
      }

      onSubmit(e);
    },
    [data, onSubmit, validate],
  );

  return { data, touched, errors, handleChange, handleBlur, handleSubmit };
}

export default useForm;
