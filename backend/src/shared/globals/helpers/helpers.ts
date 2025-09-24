export class Helpers {
  static firstLetterUppercase(str: string): string {
    const valueString = str.toLowerCase();

    return valueString
      .split(" ")
      .map(
        (value: string) => `${value.charAt(0).toUpperCase()}${value.slice(1)}`,
      )
      .join(" ");
  }
}
