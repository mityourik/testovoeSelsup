import { Model, Param } from "../components/ParamEditor/types";

export const sampleParams: Param[] = [
  { id: 1, name: "Длина", type: 'string' },
  { id: 2, name: "Ширина", type: 'string' }
];

export const sampleModel: Model = {
  paramValues: [
    { paramId: 1, value: "20см" },
    { paramId: 2, value: "10см" }
  ],
  colors: ["#FFFFFF", "#000000"]
};
