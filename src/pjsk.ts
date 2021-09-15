import { UUID } from './const';

export enum NoteType {
	Tap = 0,
	Flick = 1,
	SlideStart = 2,
	SlideInvisible = 3,
	SlideVisible = 4,
	SlideEndDefault = 5,
	SlideEndFlick = 6
};

export enum CurveType {
	None = 0,
	Linear = 1,
	EaseIn = 2,
	EaseOut = 3,
	EaseInOut = 4,
	CubicBezier = 5
};

export enum FlickDirection {
	Up = 0,
	Left = 1,
	Right = 2
}

export interface IMap {
	timelines: IMapTimeline[],
	bpms: IMapBPM[],
	notes: (INoteTap | INoteFlick)[],
	slides: INoteSlide[]
};

export interface IMapTimeline {
	id: UUID,
	name: string
};

export type MapBeat = [number, number, number];

export interface IMapBPM {
	id: UUID,
	timeline: UUID,
	beat: MapBeat,
	bpm: number
};

interface INote {
	id: UUID,
	timeline: UUID,
	type: NoteType,
	beat: MapBeat,
	lane: number,
	width: number,
	critical: boolean
}

export interface INoteTap extends INote {
	type: NoteType.Tap,
}

export interface INoteFlick extends INote {
	type: NoteType.Flick,
	direction: FlickDirection
}

export interface INoteSlide {
	id: UUID,
	timeline: UUID,
	critical: boolean,
	notes: INoteSlideNote[]
}

export type INoteSlideNote = INoteSlideStart | INoteSlideInvisible |
	INoteSlideVisible | INoteSlideEndDefault | INoteSlideEndFlick;

export interface ISlideNote {
	id: UUID,
	type: NoteType,
	beat: MapBeat,
	lane: number,
	width: number,
	curve: CurveType,
	bezier?: CubicBezier
}

export type CubicBezier = [number, number, number, number];

export interface INoteSlideStart extends ISlideNote {
	type: NoteType.SlideStart
}

export interface INoteSlideInvisible extends ISlideNote {
	type: NoteType.SlideInvisible
}

export interface INoteSlideVisible {
	id: UUID,
	type: NoteType.SlideVisible,
	beat: MapBeat,
	lane?: number,
	width?: number,
	curve?: CurveType,
	bezier?: CubicBezier
}

export interface INoteSlideEndDefault extends ISlideNote {
	type: NoteType.SlideEndDefault
}

export interface INoteSlideEndFlick extends ISlideNote {
	type: NoteType.SlideEndFlick,
	direction: FlickDirection,
	critical?: boolean
}