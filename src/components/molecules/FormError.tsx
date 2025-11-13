type FormStateWithErrors = {
    errors?: string[] | undefined;
};

const FormErrors = <T extends FormStateWithErrors>({
                                                       errors,
                                                   }: {
    errors: T["errors"];
}): React.ReactElement | null => {
    if (!errors) return null;

    const allErrors = Object.values(errors).flat().filter(Boolean) as string[];

    if (allErrors.length === 0) return null;

    return (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-bold mb-2">Please fix the following errors:</p>
            <ul className="list-disc list-inside">
                {allErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </div>
    );
};

export default FormErrors;