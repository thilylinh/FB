/* eslint-disable */
import { compareDates, formatDateUTC, toFixNumber } from "@/utils/utils";
import EventBus from '@/utils/EventBus';

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

        getParamQueryTheme(key: string): string {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const account = params.get(key) || "";
            return account;
        },

        formatPrice(number: number, decimal = 2): string {
            const formatter = new Intl.NumberFormat("en-US", {
                minimumFractionDigits: decimal,
                maximumFractionDigits: decimal,
            });
            return formatter.format(number);
        },

        renderDate(date: string | Date) {
            const dateFormat = formatDateUTC(date, 2);

            return `${dateFormat.day}/${dateFormat.month}/${dateFormat.year} ${dateFormat.hour}:${dateFormat.minutes}`;
        },

        renderDateTimeText(date: string | Date) {
            const dateFormat = formatDateUTC(date, 2);

            return `${dateFormat.dayName}, ${dateFormat.day} ${dateFormat.monthName} ${dateFormat.year} ${dateFormat.hour}:${dateFormat.minutes}`;
        },

        renderDateText(date: string | Date) {
            const dateFormat = formatDateUTC(date, 2);
            return `${dateFormat.dayName}, ${dateFormat.day} ${dateFormat.monthName} ${dateFormat.year}`;
        },

        renderHour(date: string | Date) {
            const dateFormat = formatDateUTC(date, 2);
            return `${dateFormat.hour}:${dateFormat.minutes}`;
        },

        compareDate(date1:string | Date, date2: string | Date) {
            return compareDates(date1, date2, 2)
        },

        checkIsMobile() {
            return window.innerWidth < 768;
        },
        
        handleCalculateBottom() {
            setTimeout(() => {
                EventBus.emit('calculate-bottom-page', null)
            })
        },

        toFixNumber(number: number, numberFixed: number) {
            return toFixNumber(number, numberFixed)
        },

        filterAndSortNumbers(numbers: any, targetValues: number[]) {
            return [...numbers]
                .filter((n) => targetValues.length > 0 && targetValues.includes(n.value))
                .sort((a, b) => targetValues.indexOf(a.value) - targetValues.indexOf(b.value));
        }
    },
};
