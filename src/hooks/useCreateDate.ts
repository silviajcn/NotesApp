

export const useCreateDate = (): string => {
    const currentDate: Date = new Date();

    // Hours:
    let hrs: number = currentDate.getHours();
    // 12 hour time system:
    let amPm:string = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    // Minutes:
    let min:string | number = currentDate.getMinutes();
    min = min < 10 ? "0" + min : min;

    // const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}, [${currentDate.getHours().toLocaleString()}:${currentDate.getMinutes()}]`;

    const date: string = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}, ${hrs}:${min} ${amPm}`;
    
    return date;
};