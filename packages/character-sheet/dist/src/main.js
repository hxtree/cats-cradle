"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const npc_1 = require("./archetype/npc");
async function getArchetype(id) {
    try {
        const archetype = (0, npc_1.npc)(id);
        const character = { id: id, ...archetype };
        return await Promise.resolve(character);
    }
    catch (err) {
        Promise.reject(new Error('Failed to get Archetype'));
    }
}
async function listArchetypes() {
    try {
        const archetype = npc_1.NPCList['Lawzon'];
        const character = { archetype };
        return await Promise.resolve(character);
    }
    catch (err) {
        Promise.reject(new Error('Failed to get Archetypes'));
    }
}
const handler = async (event) => {
    switch (event.info.fieldName) {
        case 'listArchetypes':
            return await listArchetypes();
        case 'getArchetypeById':
            return await getArchetype(event.arguments.archetypeId);
        default:
            return null;
    }
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUE2QztBQUU3QyxLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQVU7SUFDcEMsSUFBSTtRQUNGLE1BQU0sU0FBUyxHQUFHLElBQUEsU0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sU0FBUyxHQUFHLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBQyxDQUFDO1FBQ3pDLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztLQUN0RDtBQUNILENBQUM7QUFFRCxLQUFLLFVBQVUsY0FBYztJQUMzQixJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQXNCLGFBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxNQUFNLFNBQVMsR0FBRyxFQUFDLFNBQVMsRUFBQyxDQUFDO1FBQzlCLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztLQUN2RDtBQUNILENBQUM7QUFFTSxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBZ0MsRUFBRSxFQUFFO0lBQ2hFLFFBQVEsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDNUIsS0FBSyxnQkFBZ0I7WUFDbkIsT0FBTyxNQUFNLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLEtBQUssa0JBQWtCO1lBQ3JCLE9BQU8sTUFBTSxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RDtZQUNFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDSCxDQUFDLENBQUM7QUFUVyxRQUFBLE9BQU8sV0FTbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFN5bmNSZXNvbHZlckV2ZW50fSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB7TlBDTGlzdCwgbnBjfSBmcm9tICcuL2FyY2hldHlwZS9ucGMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRBcmNoZXR5cGUoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXJjaGV0eXBlID0gbnBjKGlkKTtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSB7aWQ6IGlkLCAuLi5hcmNoZXR5cGV9O1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoY2hhcmFjdGVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IEFyY2hldHlwZScpKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsaXN0QXJjaGV0eXBlcygpOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFyY2hldHlwZTogTlBDTGlzdC5DaGFyYWN0ZXIgPSBOUENMaXN0WydMYXd6b24nXTtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSB7YXJjaGV0eXBlfTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGNoYXJhY3Rlcik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCBBcmNoZXR5cGVzJykpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBBcHBTeW5jUmVzb2x2ZXJFdmVudDxhbnk+KSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuaW5mby5maWVsZE5hbWUpIHtcbiAgICBjYXNlICdsaXN0QXJjaGV0eXBlcyc6XG4gICAgICByZXR1cm4gYXdhaXQgbGlzdEFyY2hldHlwZXMoKTtcbiAgICBjYXNlICdnZXRBcmNoZXR5cGVCeUlkJzpcbiAgICAgIHJldHVybiBhd2FpdCBnZXRBcmNoZXR5cGUoZXZlbnQuYXJndW1lbnRzLmFyY2hldHlwZUlkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iXX0=