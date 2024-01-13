/* eslint-disable */
import { formatDateUTC } from "@/utils/utils";

export default {
    data(): any {
        return {};
    },

    methods: {
        renderDate(date: string | Date) {
            const dateFormat = formatDateUTC(date, 2);

            return `${dateFormat.day}/${dateFormat.month}/${dateFormat.year} ${dateFormat.hour}:${dateFormat.minutes}`;
        },
    },
};
