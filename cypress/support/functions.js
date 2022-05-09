
/* getTimeofDay - function to get current time of day

returns       - 'morning' if time < 12
                'afternoon' if time < 17
                else return 'evening'
Change log : <name> : <date> : <changes>
raplopez 08/05/2022 : Initial creation
*/
export function getTimeOfDay() {
    const hours = new Date().getHours()
    return hours < 12 ? 'morning' :
           hours < 18 ? 'afternoon' :
           'evening'
}

/* generateRandomString - function to generate a random string 
Parameters              - string_length = number of characters to generate
Returns                 - string with length = string_length
Change log : <name> : <date> : <changes>
raplopez 08/05/2022 : Initial creation
*/

export function generateRandomString(string_length) {
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
  }