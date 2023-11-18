export const emailRegexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*#])[A-Za-z\d@$!%^*#]{8,}$/;
/* passwordRegexp
Co najmniej 8 znaków.
Co najmniej jedna mała litera (a-z).
Co najmniej jedna duża litera (A-Z).
Co najmniej jedna cyfra (0-9).
Może zawierać znaki specjalne (np. !@#$%^&*).
 */