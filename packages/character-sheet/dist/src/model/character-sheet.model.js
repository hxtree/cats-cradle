"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSheet = exports.characterSheetSchema = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
// Schema for document interface
exports.characterSheetSchema = new mongoose_1.Schema({
    id: { type: uuid_1.v4, required: true },
    archetype: { type: String, required: true },
    traits: { type: [], required: true },
    attributes: { type: [], required: true },
    experiences: { type: [], required: true },
    equipment: { type: [], required: true },
    updatedAt: { Date, required: true },
    createdAt: { Date, required: true },
});
// Model.
exports.CharacterSheet = (0, mongoose_1.model)('CharacterSheet', exports.characterSheetSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLXNoZWV0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVsL2NoYXJhY3Rlci1zaGVldC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBdUM7QUFDdkMsK0JBQWtDO0FBK0JsQyxnQ0FBZ0M7QUFDbkIsUUFBQSxvQkFBb0IsR0FBRyxJQUFJLGlCQUFNLENBQWtCO0lBQzlELEVBQUUsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUNsQyxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDekMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ2xDLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUN0QyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDdkMsU0FBUyxFQUFFLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3JDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ2pDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0NBQ2xDLENBQUMsQ0FBQztBQUVILFNBQVM7QUFDSSxRQUFBLGNBQWMsR0FBRyxJQUFBLGdCQUFLLEVBQ2pDLGdCQUFnQixFQUNoQiw0QkFBb0IsQ0FDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZW1hLCBtb2RlbH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHtUcmFpdH0gZnJvbSAnLi4vY29tcG9uZW50L3RyYWl0JztcbmltcG9ydCB7RGlzY2lwbGluZX0gZnJvbSAnLi4vY29tcG9uZW50L2Rpc2NpcGxpbmUnO1xuaW1wb3J0IHtEcml2ZSwgTGlmZSwgU3Bpcml0fSBmcm9tICcuLi9jb21wb25lbnQvZ2F1Z2VzJztcbmltcG9ydCB7R2VhclNsb3R9IGZyb20gJy4uL2NvbXBvbmVudC9nZWFyJztcbmltcG9ydCB7RXF1aXBtZW50fSBmcm9tICcuLi9jb21wb25lbnQvZXF1aXBtZW50LmdlYXInO1xuXG4vLyBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIGEgZG9jdW1lbnRcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJhY3RlclNoZWV0IHtcbiAgaWQ6IHV1aWR2NDtcbiAgYXJjaGV0eXBlOiBzdHJpbmc7XG4gIHRyYWl0czogVHJhaXRbXTtcbiAgYXR0cmlidXRlczoge1xuICAgIGxpZmU6IExpZmU7XG4gICAgc3Bpcml0OiBTcGlyaXQ7XG4gICAgZHJpdmU6IERyaXZlO1xuICAgIHBvd2VyOiBudW1iZXI7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICB3aXNkb206IG51bWJlcjtcbiAgICBpbnRlbGxpZ2VuY2U6IG51bWJlcjtcbiAgICBkZWZlbnNlOiBudW1iZXI7XG4gICAgYWNjdXJhY3k6IG51bWJlcjtcbiAgICBldmFzaW9uOiBudW1iZXI7XG4gICAgbHVjazogbnVtYmVyO1xuICB9O1xuICBleHBlcmllbmNlczoge2Rpc2NpcGxpbmU6IERpc2NpcGxpbmU7IGV4cGVyaWVuY2U6IG51bWJlcn1bXTtcbiAgZXF1aXBtZW50OiB7Z2VhclNsb3Q6IEdlYXJTbG90OyBlcXVpcG1lbnQ6IEVxdWlwbWVudH1bXTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xuICBjcmVhdGVkQXQ6IERhdGU7XG59XG5cbi8vIFNjaGVtYSBmb3IgZG9jdW1lbnQgaW50ZXJmYWNlXG5leHBvcnQgY29uc3QgY2hhcmFjdGVyU2hlZXRTY2hlbWEgPSBuZXcgU2NoZW1hPElDaGFyYWN0ZXJTaGVldD4oe1xuICBpZDoge3R5cGU6IHV1aWR2NCwgcmVxdWlyZWQ6IHRydWV9LFxuICBhcmNoZXR5cGU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgdHJhaXRzOiB7dHlwZTogW10sIHJlcXVpcmVkOiB0cnVlfSxcbiAgYXR0cmlidXRlczoge3R5cGU6IFtdLCByZXF1aXJlZDogdHJ1ZX0sXG4gIGV4cGVyaWVuY2VzOiB7dHlwZTogW10sIHJlcXVpcmVkOiB0cnVlfSxcbiAgZXF1aXBtZW50OiB7dHlwZTogW10sIHJlcXVpcmVkOiB0cnVlfSxcbiAgdXBkYXRlZEF0OiB7RGF0ZSwgcmVxdWlyZWQ6IHRydWV9LFxuICBjcmVhdGVkQXQ6IHtEYXRlLCByZXF1aXJlZDogdHJ1ZX0sXG59KTtcblxuLy8gTW9kZWwuXG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyU2hlZXQgPSBtb2RlbDxJQ2hhcmFjdGVyU2hlZXQ+KFxuICAnQ2hhcmFjdGVyU2hlZXQnLFxuICBjaGFyYWN0ZXJTaGVldFNjaGVtYSxcbik7XG4iXX0=