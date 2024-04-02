import { AppActiveState } from '../template-interfaces/App.interface';
import { PresetsArray } from '../template-interfaces/PluginPresets/Presets.interface';
import { TableRow } from '../template-interfaces/Table.interface';

interface IERDPluginProps {
  entities: Entity[];
  pluginPresets?: PresetsArray;
  appActiveState?: AppActiveState;
  activeViewRows?: TableRow[];
  nodes?: Node[];
  links?: Link[];
}

interface Node {
  id: string;
}

interface Link {
  source: string;
  target: string;
}

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Entity {
  eTitle: string;
  eAttributes: { [key: string]: string };
}

interface Relationship {
  id: string;
  node1: {
    title: string;
    attrKey: string;
  };
  node2: {
    title: string;
    attrKey: string;
  };
}

interface EntityCoordinates {
  title: string;
  attrKey: string;
  x: number;
  y: number;
}

interface LineCoordinate {
  line_id: string;
  node1: {
    title: string;
    attrKey: string;
    x1: number;
    y1: number;
  };
  node2: {
    title: string;
    attrKey: string; 
    x2: number;
    y2: number;
  };
}

export type {
  IERDPluginProps,
  Node,
  Link,
  Rectangle,
  Entity,
  Relationship,
  EntityCoordinates,
  LineCoordinate,
};
