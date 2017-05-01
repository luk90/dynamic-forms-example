export class ErrorMessageService {
  static getValidationMessage(validator: string, validatorValue?: any) {
    const messages = {
      required: `Pole jest wymagane`,
      minlength: `Wpisz co najmniej ${validatorValue.requiredLength} znaki/ów`,
      maxlength: `Wpisz co najwyżej ${validatorValue.requiredLength} znaki/ów`,
      invalidNipChecksum: `Nieprawidłowy numer NIP`,
      invalidNipPattern: `NIP musi składać się z 11 cyfr`,
      invalidEmail: `Nieprawidłowy e-mail`,
      mismatchPassword: `Hasła do siebie nie pasują`,
      invalidPassword: `Wpisz co najmniej 8 znaków, hasło musi zawierać przynajmniej jedną małą i duzą literę, cyfrę, znak specjalny`,
      invalidRegonChecksum: `Nieprawidłowy numer REGON`,
      invalidRegonPattern: `REGON musi składać się z 9 lub 14 cyfr`,
      notBeforeDate: `Data nie może być wcześniejsza niż ${validatorValue.beforeDate}`,
      invalidLowerNumber: `Numer nie może być mniejszy niż ${validatorValue.number}`,
    };
    return messages[validator];
  }
}
