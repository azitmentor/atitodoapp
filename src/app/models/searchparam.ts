export class SearchParam {
    text?: string | null;
    tags?: string[] = [];
    showdone?: boolean;
    showdeleted?: boolean;
    showarchived?: boolean;
    deletedonly?: boolean;
    starredonly?: boolean;
    archivedonly?: boolean;
    todayonly?: boolean;
    wastoday?: boolean;
    hidebelow?: number;
}