"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scribbles = exports.Mischievous = exports.Ouruborus = exports.Sandy = exports.Lyre = exports.HeraldicLion = exports.Felix = exports.Vachel = exports.SummonSkillList = void 0;
/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
var SummonSkillList;
(function (SummonSkillList) {
    SummonSkillList["VACHEL"] = "Vachel";
    SummonSkillList["FELIX"] = "Felix";
    SummonSkillList["HERALDIC_LION"] = "Heraldic Lion";
    SummonSkillList["LYRE"] = "Lyre";
    SummonSkillList["SANDY"] = "Sandy";
    SummonSkillList["OURUBORUS"] = "Ouruborus";
    SummonSkillList["MISCHIEVOUS"] = "Mischievous";
    SummonSkillList["SCRIBBLES"] = "Scribbles";
    // Malace's tattoos reference lesser key of solomon?
})(SummonSkillList = exports.SummonSkillList || (exports.SummonSkillList = {}));
class Vachel {
}
exports.Vachel = Vachel;
class Felix {
}
exports.Felix = Felix;
class HeraldicLion {
}
exports.HeraldicLion = HeraldicLion;
class Lyre {
}
exports.Lyre = Lyre;
class Sandy {
}
exports.Sandy = Sandy;
class Ouruborus {
}
exports.Ouruborus = Ouruborus;
class Mischievous {
}
exports.Mischievous = Mischievous;
class Scribbles {
}
exports.Scribbles = Scribbles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbW9uLnNraWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9zdW1tb24uc2tpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBV0E7Ozs7OztHQU1HO0FBQ0gsSUFBWSxlQVVYO0FBVkQsV0FBWSxlQUFlO0lBQ3pCLG9DQUFpQixDQUFBO0lBQ2pCLGtDQUFlLENBQUE7SUFDZixrREFBK0IsQ0FBQTtJQUMvQixnQ0FBYSxDQUFBO0lBQ2Isa0NBQWUsQ0FBQTtJQUNmLDBDQUF1QixDQUFBO0lBQ3ZCLDhDQUEyQixDQUFBO0lBQzNCLDBDQUF1QixDQUFBO0lBQ3ZCLG9EQUFvRDtBQUN0RCxDQUFDLEVBVlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFVMUI7QUFTRCxNQUFhLE1BQU07Q0FXbEI7QUFYRCx3QkFXQztBQUVELE1BQWEsS0FBSztDQUtqQjtBQUxELHNCQUtDO0FBRUQsTUFBYSxZQUFZO0NBV3hCO0FBWEQsb0NBV0M7QUFFRCxNQUFhLElBQUk7Q0FLaEI7QUFMRCxvQkFLQztBQUVELE1BQWEsS0FBSztDQUtqQjtBQUxELHNCQUtDO0FBRUQsTUFBYSxTQUFTO0NBS3JCO0FBTEQsOEJBS0M7QUFFRCxNQUFhLFdBQVc7Q0FLdkI7QUFMRCxrQ0FLQztBQUVELE1BQWEsU0FBUztDQUtyQjtBQUxELDhCQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRmF5ZUltYWdvLFxuICBHdW50ZXJTdG9uZXdlbGwsXG4gIExvb21lZUFuZ29yYSxcbiAgTWFsYWNlVHNpYSxcbiAgTWVla3VPbmksXG4gIFBlbm55S2liYnV0eixcbiAgUGxheWVyQ2hhcmFjdGVyLFxuICBUcmFlelV0aHNoYSxcbn0gZnJvbSAnLi4vYXJjaGV0eXBlL3BsYXllcic7XG5cbi8qKlxuICogU3VtbW9ucyBhcmUgY29tcGFpbm9ucyB0aGF0IG1heSBiZSBjYWxsZWQgaW50byBwbGF5IGluIHZhcnlpbmcgd2F5cyB0byBhaWQgcGFydHkuXG4gKiBTdW1tb25zIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCB0aGUgQ29tbWFuZCBhY3Rpb24gb3IgdGhyb3VnaCB0aGUgSW50ZXJhY3Rpb24gQ29tbWFuZC5cbiAqIEFsdGhvdWdoIHRoZXkgYWNjZXB0IENvbW1hbmRzIHRoZXkgZG8gbm90IG5lY2Vzc2FyaWx5IGZvbGxvdyB0aGVtLlxuICogU3VtbW9ucyBoYXZlIGRpZmZlcmVudCBsZXZlbHMgYW5kIHN0YXRzIGp1c3QgbGlrZSBjaGFyYWN0ZXJzLlxuICogVGhlIG1vcmUgYSBQbGF5ZXIgdXNlcyB0aGVtIHRoZSBtb3JlIHBvd2VyZnVsIHRoZXkgZ3Jvdy5cbiAqL1xuZXhwb3J0IGVudW0gU3VtbW9uU2tpbGxMaXN0IHtcbiAgVkFDSEVMID0gJ1ZhY2hlbCcsXG4gIEZFTElYID0gJ0ZlbGl4JyxcbiAgSEVSQUxESUNfTElPTiA9ICdIZXJhbGRpYyBMaW9uJyxcbiAgTFlSRSA9ICdMeXJlJyxcbiAgU0FORFkgPSAnU2FuZHknLFxuICBPVVJVQk9SVVMgPSAnT3VydWJvcnVzJyxcbiAgTUlTQ0hJRVZPVVMgPSAnTWlzY2hpZXZvdXMnLFxuICBTQ1JJQkJMRVMgPSAnU2NyaWJibGVzJyxcbiAgLy8gTWFsYWNlJ3MgdGF0dG9vcyByZWZlcmVuY2UgbGVzc2VyIGtleSBvZiBzb2xvbW9uP1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1bW1vbiB7XG4gIG5hbWU6IFN1bW1vblNraWxsTGlzdDtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc3VtbW9uZXI6IFBsYXllckNoYXJhY3RlcjtcbiAgY29tbWFuZHM/OiBBcnJheTxzdHJpbmc+OyAvLyBtdXN0IGJlIGludm9rZWQgYnkgc3VtbW9uZXIgdGhyb3VnaCBDb21tYW5kXG59XG5cbmV4cG9ydCBjbGFzcyBWYWNoZWwgaW1wbGVtZW50cyBTdW1tb24ge1xuICBuYW1lOiBTdW1tb25Ta2lsbExpc3QuVkFDSEVMO1xuICBkZXNjcmlwdGlvbjogJ0Egc2lsdmVyIGJ1bGwnO1xuICBiYWNrc3Rvcnk6ICdBIGJ1bGwgdGhhdCBNZWVrdSByYWlzZWQgYXMgYSBjaGlsZCc7XG4gIHN1bW1vbmVyOiBNZWVrdU9uaTtcbiAgY29tbWFuZHM6IFtcbiAgICAnQ2hhcmdlJyxcbiAgICAnR3JhemUnLCAvLyBlYXQgZ3Jhc3NcbiAgICAnUHVsbCBDYXJ0JywgLy8gKkNhbiBiZSB1cGdyYWRlZCB3aXRoIENBUlQgdG8gYWNjb21tb2RhdGUgbGFyZ2UgUGFydHkuXG4gICAgLy8gQ2FuIGJlIHVzZWQgd2l0aCBPdmVyZHJpdmUgY29tYmluYXRpb25zXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBGZWxpeCBpbXBsZW1lbnRzIFN1bW1vbiB7XG4gIG5hbWU6IFN1bW1vblNraWxsTGlzdC5GRUxJWDtcbiAgZGVzY3JpcHRpb246ICdBIHdoaXRlIGxvcC1lYXJlZCBkd2FyZiByYWJiaXQnO1xuICBiYWNrc3Rvcnk6ICdGZWxpeCBpcyBhIHBldCB0aGF0IExvb21lZSBhZG9wdHMuIEhlIGRvZXMgbm90IGxpc3RlbiB3ZWxsLiBIZSBsaWtlcyB0byBuaWJibGUgb24gZ3Jhc3Mgc2xvd2x5Lic7XG4gIHN1bW1vbmVyOiBMb29tZWVBbmdvcmE7XG59XG5cbmV4cG9ydCBjbGFzcyBIZXJhbGRpY0xpb24gaW1wbGVtZW50cyBTdW1tb24ge1xuICBuYW1lOiBTdW1tb25Ta2lsbExpc3QuSEVSQUxESUNfTElPTjtcbiAgZGVzY3JpcHRpb246ICdBIHJlZ2FsIGxpb24gd2l0aCBhbiBpbXBlY2FibGUgc3RhbmNlJztcbiAgc3VtbW9uZXI6IFBlbm55S2liYnV0ejtcbiAgY29tbWFuZHM6IFtcbiAgICAvLyBodHRwczovL2ZhbWlseWhpc3Rvcnlmb3VuZGF0aW9uLmNvbS8yMDIwLzA3LzE3L2hlcmFsZGljLWxpb24tcG9zaXRpb25zL1xuICAgICdQYXNzYW50IFN0YW5jZScsIC8vIGNsYXdcbiAgICAnUmFtcGFudCBTdGFuY2UnLCAvLyBtdWx0aXBsZSBoYXN0eSBhdHRhY2tzIHRoYXQgcmVkdWNlIGRlZmVuc2VcbiAgICAnSXNzdWFudCBTdGFuY2UnLCAvLyBmb2N1c1xuICAgICdHdWFyZGFudCBTdGFuY2UnLCAvLyBndWFyZFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgTHlyZSBpbXBsZW1lbnRzIFN1bW1vbiB7XG4gIG5hbWU6IFN1bW1vblNraWxsTGlzdC5MWVJFO1xuICBkZXNjcmlwdGlvbjogJ0EgZ2lhbnQgaGFsZiBMdW5hIG1vdGggYW5kIGx5cmViaXJkIHRoYXQgRmF5ZSBjYW4gc3VtbW9uIGF0IHdpbGwnO1xuICBiYWNrc3Rvcnk6ICcnO1xuICBzdW1tb25lcjogRmF5ZUltYWdvO1xufVxuXG5leHBvcnQgY2xhc3MgU2FuZHkgaW1wbGVtZW50cyBTdW1tb24ge1xuICBuYW1lOiBTdW1tb25Ta2lsbExpc3QuU0FORFk7XG4gIGRlc2NyaXB0aW9uOiAnQSBib3ggdHVydGxlJztcbiAgYmFja3N0b3J5OiAnJztcbiAgc3VtbW9uZXI6IFRyYWV6VXRoc2hhO1xufVxuXG5leHBvcnQgY2xhc3MgT3VydWJvcnVzIGltcGxlbWVudHMgU3VtbW9uIHtcbiAgbmFtZTogU3VtbW9uU2tpbGxMaXN0Lk9VUlVCT1JVUztcbiAgZGVzY3JpcHRpb246ICdBIGRlbW9uIHRoYXQgY29uc3VtZXMgaXRzZWxmJztcbiAgYmFja3N0b3J5OiAnJztcbiAgc3VtbW9uZXI6IE1hbGFjZVRzaWE7XG59XG5cbmV4cG9ydCBjbGFzcyBNaXNjaGlldm91cyBpbXBsZW1lbnRzIFN1bW1vbiB7XG4gIG5hbWU6IFN1bW1vblNraWxsTGlzdC5NSVNDSElFVk9VUztcbiAgZGVzY3JpcHRpb246ICdBIGJsYWNrIGFuZCB3aGl0ZSBjYXQnO1xuICBiYWNrc3Rvcnk6ICdUaGUgS2VlcGVyIG9mIExhdyc7XG4gIHN1bW1vbmVyOiBNYWxhY2VUc2lhO1xufVxuXG5leHBvcnQgY2xhc3MgU2NyaWJibGVzIGltcGxlbWVudHMgU3VtbW9uIHtcbiAgbmFtZTogU3VtbW9uU2tpbGxMaXN0LlNDUklCQkxFUztcbiAgZGVzY3JpcHRpb246ICdBIGZseWluZyBzcXVpcnJlbCc7XG4gIGJhY2tzdG9yeTogJyc7XG4gIHN1bW1vbmVyOiBHdW50ZXJTdG9uZXdlbGw7XG59XG4iXX0=