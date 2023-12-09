/* eslint-disable */
import { isObjEmpty, isStrEmpty, getStateStore } from "@/utils/utils";

export default {
    data(): any {
        return {};
    },

    methods: {
        getTranslatedText(text: string, xargs: any = {}) {
            if (!text) {
                return;
            }
            const store = getStateStore();
            const language = store.lang;
            if(isObjEmpty(language)) {
                return text;
            }
            const rsText = text.toLowerCase();
            let translatedText: any = !isStrEmpty(language[rsText])
                ? language[rsText]
                : rsText;

            if (!isObjEmpty(xargs)) {
                for (const key in xargs) {
                    translatedText = translatedText.replace(
                        "[" + key + "]",
                        xargs[key]
                    );
                }
            }

            const capitalizedSentence = translatedText.charAt(0).toUpperCase() + translatedText.slice(1)

            return capitalizedSentence;
        },
    },
};
