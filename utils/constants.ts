import { FlattenedDictionary } from "./translation/utils";
import { intlMessages } from "./translation";

export enum LANGUAGES {
    FR = "fr",
    EN = "en",
  }
  
export const intlMessagesDispatcher: Record<LANGUAGES, FlattenedDictionary> = {
    [LANGUAGES.FR]: intlMessages.fr,
    [LANGUAGES.EN]: intlMessages.en,
  };