export function get_age(value) {
    let currentDate = new Date();
    let birthDate = new Date(value);
    let difference = currentDate - birthDate;
    let age = Math.floor(difference / 31557600000);
    return age;
}