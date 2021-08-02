export const enum MapType {
	PJSK = 0,
	BANG = 1,
	// PGRS = 2
}

export const enum ResourceType {
	Other = 0,
	Meta = 1,
	Map = 2,
	Audio = 3,
	Image = 4,
	Video = 5,
	Script = 6
}

export const ResourceTypeName = {
	[ResourceType.Other]: 'Other',
	[ResourceType.Meta]: 'Meta',
	[ResourceType.Map]: 'Map',
	[ResourceType.Audio]: 'Audio',
	[ResourceType.Image]: 'Image',
	[ResourceType.Video]: 'Video',
	[ResourceType.Script]: 'Script'
};

export enum DiffColor {
	BLUE = 'blue',
	GREEN = 'green',
	YELLOW = 'yellow',
	RED = 'red',
	PURPLE = 'purple',
	PINK = 'pink'
}

export const MapTypeInfo = {
	[MapType.PJSK]: {
		name: 'Project Sekai',
		version: 1
	},
	[MapType.BANG]: {
		name: 'BanG Dream',
		version: 1
	}
};

export type UUID = string;