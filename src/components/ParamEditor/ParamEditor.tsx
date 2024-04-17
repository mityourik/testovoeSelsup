import { FC, useState } from 'react';

interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: string[];
}

interface Props {
  params: Param[];
  model: Model;
}

const ParamEditor: FC<Props> = ({ params, model }) => {
  const [currentModel, setCurrentModel] = useState<Model>(model);

  const handleChange = (paramId: number, value: string) => {
    const newParamValues = currentModel.paramValues.map(paramValue => {
      if (paramValue.paramId === paramId) {
        return { ...paramValue, value };
      }
      return paramValue;
    });
    setCurrentModel({ ...currentModel, paramValues: newParamValues });
  };

  return (
    <div>
      {params.map((param: Param) => {
        const paramValue = currentModel.paramValues.find(pv => pv.paramId === param.id)?.value || '';
        return (
          <div key={param.id}>
            <label>{param.name}: </label>
            <input
              type="text"
              value={paramValue}
              onChange={(e) => handleChange(param.id, e.target.value)}
            />
          </div>
        );
      })}
      <button onClick={() => alert(JSON.stringify(currentModel, null, 2))}>Отобразить текущую модель</button>
    </div>
  );
};

// Пример данных для демонстрации
const sampleParams: Param[] = [
  { id: 1, name: "Длина", type: 'string' },
  { id: 2, name: "Ширина", type: 'string' }
];

const sampleModel: Model = {
  paramValues: [
    { paramId: 1, value: "20см" },
    { paramId: 2, value: "10см" }
  ],
  colors: ["#FFFFFF", "#000000"]
};

// Демонстрация использования компонента в App
const App: FC = () => {
  return <ParamEditor params={sampleParams} model={sampleModel} />;
};

export default App;
