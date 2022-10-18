"use strict";
/**
 * MovementSkill
 * actions that are directly related to movement
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Climb = exports.HighJump = exports.DoubleBackFlip = exports.BackFlip = exports.Swim = exports.Run = exports.Walk = void 0;
class Walk {
}
exports.Walk = Walk;
class Run {
}
exports.Run = Run;
class Swim {
}
exports.Swim = Swim;
class BackFlip {
}
exports.BackFlip = BackFlip;
class DoubleBackFlip {
}
exports.DoubleBackFlip = DoubleBackFlip;
class HighJump {
}
exports.HighJump = HighJump;
class Climb {
}
exports.Climb = Climb;
// "83","Trek","Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.","82",,"82"
// Trek – Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.
// Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
// "84","Duck","(Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.","83",,"83"
// Basic – (Square) jump.
// Jump – (Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina
// "85","Jump","(Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina","84",,"84"
// High – (Stamina Boost + Square) jump straight up in the air using a stamina boost.
// Long – (Directional Pad + Press Square) jump a long way.
// "87","Long Jump","Jump a long way (different than running?)","86",,"86"
// "88","Running Jump","Running while jumping","87",,"87"
// "89","Swim","Must be learned","88",,"88"
// "90","Dive","Take a breath and dive down based on stamina","89",,"89"
// Fly – magic person?
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZW1lbnQuc2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50L21vdmVtZW50LnNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7OztBQU1ILE1BQWEsSUFBSTtDQUloQjtBQUpELG9CQUlDO0FBRUQsTUFBYSxHQUFHO0NBTWY7QUFORCxrQkFNQztBQUVELE1BQWEsSUFBSTtDQUloQjtBQUpELG9CQUlDO0FBRUQsTUFBYSxRQUFRO0NBR3BCO0FBSEQsNEJBR0M7QUFFRCxNQUFhLGNBQWM7Q0FHMUI7QUFIRCx3Q0FHQztBQUVELE1BQWEsUUFBUTtDQUdwQjtBQUhELDRCQUdDO0FBRUQsTUFBYSxLQUFLO0NBR2pCO0FBSEQsc0JBR0M7QUFFRCwwTEFBMEw7QUFDMUwsd0tBQXdLO0FBRXhLLGtHQUFrRztBQUNsRyxvSEFBb0g7QUFFcEgseUJBQXlCO0FBQ3pCLGlIQUFpSDtBQUNqSCxtSUFBbUk7QUFFbkkscUZBQXFGO0FBRXJGLDJEQUEyRDtBQUMzRCwwRUFBMEU7QUFDMUUseURBQXlEO0FBRXpELDJDQUEyQztBQUUzQyx3RUFBd0U7QUFFeEUsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNb3ZlbWVudFNraWxsXG4gKiBhY3Rpb25zIHRoYXQgYXJlIGRpcmVjdGx5IHJlbGF0ZWQgdG8gbW92ZW1lbnRcbiAqL1xuXG5pbXBvcnQge0Jhc2VTa2lsbH0gZnJvbSAnLi9iYXNlLnNraWxsJztcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlbWVudFNraWxsIGV4dGVuZHMgQmFzZVNraWxsIHt9XG5cbmV4cG9ydCBjbGFzcyBXYWxrIGltcGxlbWVudHMgTW92ZW1lbnRTa2lsbCB7XG4gIG5hbWU6ICdXYWxrJztcbiAgZGVzY3JpcHRpb246ICdNb3ZlIHNsb3dseSBmb3J3YXJkIG9yIGJhY2t3YXJkIHNpZGUgdG8gc2lkZSc7XG4gIC8vIChMaWdodCBwcmVzcyBEaXJlY3Rpb24gUGFkKSBNb3ZlIHNsb3dseS5cbn1cblxuZXhwb3J0IGNsYXNzIFJ1biBpbXBsZW1lbnRzIE1vdmVtZW50U2tpbGwge1xuICBuYW1lOiAnUnVuJztcbiAgZGVzY3JpcHRpb246ICdNb3ZlIHF1aWNrbHkgdXNpbmcgc3RhbWluYSc7XG4gIC8vIGNvbnN1bWVzIHN0YW5taW5hXG4gIC8vICh3YWxrICsgU3F1YXJlKVxuICAvLyAoSGFyZCBwcmVzcyBEaXJlY3Rpb24gUGFkIHdpdGggU3RhbWluYSlcbn1cblxuZXhwb3J0IGNsYXNzIFN3aW0gaW1wbGVtZW50cyBNb3ZlbWVudFNraWxsIHtcbiAgbmFtZTogJ1N3aW0nO1xuICBkZXNjcmlwdGlvbjogJ01vdmUgaW4gZGVlcCB3YXRlcic7XG4gIC8vIGNvbnN1bWVzIHN0YW5taW5hXG59XG5cbmV4cG9ydCBjbGFzcyBCYWNrRmxpcCBpbXBsZW1lbnRzIE1vdmVtZW50U2tpbGwge1xuICBuYW1lOiAnQmFjayBGbGlwJztcbiAgZGVzY3JpcHRpb246ICdRdWlja2x5IG1vdmUgYmFja3dhcmRzJztcbn1cblxuZXhwb3J0IGNsYXNzIERvdWJsZUJhY2tGbGlwIGltcGxlbWVudHMgTW92ZW1lbnRTa2lsbCB7XG4gIG5hbWU6ICdEb3VibGUgQmFjayBGbGlwJztcbiAgZGVzY3JpcHRpb246ICdRdWlja2x5IG1vdmUgYmFja3dhcmRzIHR3aWNlJztcbn1cblxuZXhwb3J0IGNsYXNzIEhpZ2hKdW1wIGltcGxlbWVudHMgTW92ZW1lbnRTa2lsbCB7XG4gIG5hbWU6ICdIaWdoIEp1bXAnO1xuICBkZXNjcmlwdGlvbjogJ0NoYXJnZWQgdmVydGljYWwganVtcCc7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGltYiBpbXBsZW1lbnRzIE1vdmVtZW50U2tpbGwge1xuICBuYW1lOiAnQ2xpbWInO1xuICBkZXNjcmlwdGlvbjogJ1NjYWxlIGEgd2FsbCc7XG59XG5cbi8vIFwiODNcIixcIlRyZWtcIixcIlVzZWQgdG8gZGV0ZXJtaW5lIGhvdyBzdGVlcCBhbiBhbmdsZWQgdGlsZSB5b3UgY2FuIHN0YW5kIG9uLiBJZiB5b3VyIGNoYXJhY3RlciBmYWlscyB0byB0cmVrIHRoZSB0aWxlIHRoZW4gdGhleSB3aWxsIGZhbGwgZnJvbSBpdCBhbmQgd2lsbCBiZSB0byBzdGVwIG9udG8gaXQuXCIsXCI4MlwiLCxcIjgyXCJcbi8vIFRyZWsg4oCTIFVzZWQgdG8gZGV0ZXJtaW5lIGhvdyBzdGVlcCBhbiBhbmdsZWQgdGlsZSB5b3UgY2FuIHN0YW5kIG9uLiBJZiB5b3VyIGNoYXJhY3RlciBmYWlscyB0byB0cmVrIHRoZSB0aWxlIHRoZW4gdGhleSB3aWxsIGZhbGwgZnJvbSBpdCBhbmQgd2lsbCBiZSB0byBzdGVwIG9udG8gaXQuXG5cbi8vIER1Y2sg4oCTIChIb2xkIFNxdWFyZSArIEJhY2t3YXJkcz8pIHVzZWQgdG8gZXZhZGVkIGF0dGFja3Mgd29ya3MgYmVzdCBpZiBwcmVmb3JtZWQgZHVyaW5nIGF0dGFjay5cbi8vIFwiODRcIixcIkR1Y2tcIixcIihIb2xkIFNxdWFyZSArIEJhY2t3YXJkcz8pIHVzZWQgdG8gZXZhZGVkIGF0dGFja3Mgd29ya3MgYmVzdCBpZiBwcmVmb3JtZWQgZHVyaW5nIGF0dGFjay5cIixcIjgzXCIsLFwiODNcIlxuXG4vLyBCYXNpYyDigJMgKFNxdWFyZSkganVtcC5cbi8vIEp1bXAg4oCTIChTcXVhcmUpIEp1bXBpbmcgdXNlcyBzdGFtaW5hIGFuZCBjYW4gYmUgdXNlZCB0byBtb3ZlIHRvIG90aGVyd2lzZSB1bnJlYWNoYWJsZSBwbGFjZXMuIFRoZSBtb3JlIHN0YW1pbmFcbi8vIFwiODVcIixcIkp1bXBcIixcIihTcXVhcmUpIEp1bXBpbmcgdXNlcyBzdGFtaW5hIGFuZCBjYW4gYmUgdXNlZCB0byBtb3ZlIHRvIG90aGVyd2lzZSB1bnJlYWNoYWJsZSBwbGFjZXMuIFRoZSBtb3JlIHN0YW1pbmFcIixcIjg0XCIsLFwiODRcIlxuXG4vLyBIaWdoIOKAkyAoU3RhbWluYSBCb29zdCArIFNxdWFyZSkganVtcCBzdHJhaWdodCB1cCBpbiB0aGUgYWlyIHVzaW5nIGEgc3RhbWluYSBib29zdC5cblxuLy8gTG9uZyDigJMgKERpcmVjdGlvbmFsIFBhZCArIFByZXNzIFNxdWFyZSkganVtcCBhIGxvbmcgd2F5LlxuLy8gXCI4N1wiLFwiTG9uZyBKdW1wXCIsXCJKdW1wIGEgbG9uZyB3YXkgKGRpZmZlcmVudCB0aGFuIHJ1bm5pbmc/KVwiLFwiODZcIiwsXCI4NlwiXG4vLyBcIjg4XCIsXCJSdW5uaW5nIEp1bXBcIixcIlJ1bm5pbmcgd2hpbGUganVtcGluZ1wiLFwiODdcIiwsXCI4N1wiXG5cbi8vIFwiODlcIixcIlN3aW1cIixcIk11c3QgYmUgbGVhcm5lZFwiLFwiODhcIiwsXCI4OFwiXG5cbi8vIFwiOTBcIixcIkRpdmVcIixcIlRha2UgYSBicmVhdGggYW5kIGRpdmUgZG93biBiYXNlZCBvbiBzdGFtaW5hXCIsXCI4OVwiLCxcIjg5XCJcblxuLy8gRmx5IOKAkyBtYWdpYyBwZXJzb24/XG4iXX0=