export default (): void => {
  Object.entries = <T extends object>(obj: T) => (
    Object.keys(obj).map(key => [key, obj[key as keyof T]] as [string, unknown])
  );
};
