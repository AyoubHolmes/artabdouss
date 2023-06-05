import { intlMessages } from "./translation";
import { FlattenedDictionary } from "./translation/utils";

export enum LANGUAGES {
    FR = "fr",
    EN = "en",
  }
  
export const intlMessagesDispatcher: Record<LANGUAGES, FlattenedDictionary> = {
    [LANGUAGES.FR]: intlMessages.fr,
    [LANGUAGES.EN]: intlMessages.en,
  };