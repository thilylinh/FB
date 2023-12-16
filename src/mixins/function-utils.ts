/* eslint-disable */
import { formatDateUTC } from "@/utils/utils";

export default {
    data(): any {
        return {};
    },

    methods: {
        isStrEmpty(str: string): boolean {
            return !str || str.length === 0;
        },

        isArrayEmpty(arr: any[]): boolean {
            return !arr || arr.length === 0 || !Array.isArray(arr);
        },

        isObjEmpty(obj: any[]): boolean {
            return !obj || Object.keys(obj).length === 0;
        },

        renderDate(date: string | Date) {
            const dateFormat = formatDateUTC(date, 2);

            return `${dateFormat.day}/${dateFormat.month}/${dateFormat.year} ${dateFormat.hour}:${dateFormat.minutes}`;
        },
    },
};
