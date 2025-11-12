export type LoginFormState = {
    message?: string;
    errors?: string[];
};

export type LoginAction = (
    prevState: LoginFormState,
    formData: FormData
) => Promise<LoginFormState>;