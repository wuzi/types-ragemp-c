declare namespace RageEnums {
	enum EventKey {
		BROWSER_CREATED = "browserCreated",
		BROWSER_DOM_READY = "browserDomReady",
		BROWSER_LOADING_FAILED = "browserLoadingFailed",
		ENTITY_CREATED = "entityCreated",
		ENTITY_STREAM_IN = "entityStreamIn",
		ENTITY_STREAM_OUT = "entityStreamOut",
		GUI_READY = "guiReady",
		CLICK = "click",
		PLAYER_CHAT = "playerChat",
		PLAYER_CREATE_WAYPOINT = "playerCreateWaypoint",
		PLAYER_COMMAND = "playerCommand",
		PLAYER_DEATH = "playerDeath",
		PLAYER_ENTER_CHECKPOINT = "playerEnterCheckpoint",
		PLAYER_ENTER_COLSHAPE = "playerEnterColshape",
		PLAYER_EXIT_CHECKPOINT = "playerExitCheckpoint",
		PLAYER_EXIT_COLSHAPE = "playerExitColshape",
		PLAYER_JOIN = "playerJoin",
		PLAYER_QUIT = "playerQuit",
		PLAYER_REACH_WAYPOINT = "playerReachWaypoint",
		PLAYER_READY = "playerReady",
		PLAYER_RESURRECT = "playerResurrect",
		PLAYER_RULE_TRIGGERED = "playerRuleTriggered",
		PLAYER_SPAWN = "playerSpawn",
		PLAYER_START_TALKING = "playerStartTalking",
		PLAYER_STOP_TALKING = "playerStopTalking",
		PLAYER_WEAPON_SHOT = "playerWeaponShot",
		RENDER = "render",
		VEHICLE_DEATH = "vehicleDeath"
	}
	
	const enum HudComponent {
		HUD = 0,
		WANTED_STARS = 1,
		WEAPON_ICON = 2,
		CASH = 3,
		MP_CASH = 4,
		MP_MESSAGE = 5,
		VEHICLE_NAME = 6,
		AREA_NAME = 7,
		VEHICLE_CLASS = 8,
		STREET_NAME = 9,
		HELP_TEXT = 10,
		FLOATING_HELP_TEXT_1 = 11,
		FLOATING_HELP_TEXT_2 = 12,
		CASH_CHANGE = 13,
		RETICLE = 14,
		SUBTITLE_TEXT = 15,
		RADIO_STATIONS = 16,
		SAVING_GAME = 17,
		GAME_STREAM = 18,
		WEAPON_WHEEL = 19,
		WEAPON_WHEEL_STATS = 20
	}

	const enum ScreenshotType {
		JPG = 0,
		PNG = 1,
		BMP = 2
	}

	const enum Controls {
		NEXT_CAMERA = 0,
		LOOK_LEFT_RIGHT = 1,
		LOOK_UP_DOWN = 2,
		LOOK_UP_ONLY = 3,
		LOOK_DOWN_ONLY = 4,
		LOOK_LEFT_ONLY = 5,
		LOOK_RIGHT_ONLY = 6,
		CINEMATIC_SLOW_MO = 7,
		FLY_UP_DOWN = 8,
		FLY_LEFT_RIGHT = 9,
		SCRIPTED_FLY_Z_UP = 10,
		SCRIPTED_FLY_Z_DOWN = 11,
		WEAPON_WHEEL_UP_DOWN = 12,
		WEAPON_WHEEL_LEFT_RIGHT = 13,
		WEAPON_WHEEL_NEXT = 14,
		WEAPON_WHEEL_PREV = 15,
		SELECT_NEXT_WEAPON = 16,
		SELECT_PREV_WEAPON = 17,
		SKIP_CUTSCENE = 18,
		CHARACTER_WHEEL = 19,
		MULTIPLAYER_INFO = 20,
		SPRINT = 21,
		JUMP = 22,
		ENTER = 23,
		ATTACK = 24,
		AIM = 25,
		LOOK_BEHIND = 26,
		PHONE = 27,
		SPECIAL_ABILITY = 28,
		SPECIAL_ABILITY_SECONDARY = 29,
		MOVE_LEFT_RIGHT = 30,
		MOVE_UP_DOWN = 31,
		MOVE_UP_ONLY = 32,
		MOVE_DOWN_ONLY = 33,
		MOVE_LEFT_ONLY = 34,
		MOVE_RIGHT_ONLY = 35,
		DUCK = 36,
		SELECT_WEAPON = 37,
		PICKUP = 38,
		SNIPER_ZOOM = 39,
		SNIPER_ZOOM_IN_ONLY = 40,
		SNIPER_ZOOM_OUT_ONLY = 41,
		SNIPER_ZOOM_IN_SECONDARY = 42,
		SNIPER_ZOOM_OUT_SECONDARY = 43,
		COVER = 44,
		RELOAD = 45,
		TALK = 46,
		DETONATE = 47,
		HUD_SPECIAL = 48,
		ARREST = 49,
		ACCURATE_AIM = 50,
		CONTEXT = 51,
		CONTEXT_SECONDARY = 52,
		WEAPON_SPECIAL = 53,
		WEAPON_SPECIAL2 = 54,
		DIVE = 55,
		DROP_WEAPON = 56,
		DROP_AMMO = 57,
		THROW_GRENADE = 58,
		VEHICLE_MOVE_LEFT_RIGHT = 59,
		VEHICLE_MOVE_UP_DOWN = 60,
		VEHICLE_MOVE_UP_ONLY = 61,
		VEHICLE_MOVE_DOWN_ONLY = 62,
		VEHICLE_MOVE_LEFT_ONLY = 63,
		VEHICLE_MOVE_RIGHT_ONLY = 64,
		VEHICLE_SPECIAL = 65,
		VEHICLE_GUN_LEFT_RIGHT = 66,
		VEHICLE_GUN_UP_DOWN = 67,
		VEHICLE_AIM = 68,
		VEHICLE_ATTACK = 69,
		VEHICLE_ATTACK2 = 70,
		VEHICLE_ACCELERATE = 71,
		VEHICLE_BRAKE = 72,
		VEHICLE_DUCK = 73,
		VEHICLE_HEADLIGHT = 74,
		VEHICLE_EXIT = 75,
		VEHICLE_HANDBRAKE = 76,
		VEHICLE_HOTWIRE_LEFT = 77,
		VEHICLE_HOTWIRE_RIGHT = 78,
		VEHICLE_LOOK_BEHIND = 79,
		VEHICLE_CIN_CAM = 80,
		VEHICLE_NEXT_RADIO = 81,
		VEHICLE_PREV_RADIO = 82,
		VEHICLE_NEXT_RADIO_TRACK = 83,
		VEHICLE_PREV_RADIO_TRACK = 84,
		VEHICLE_RADIO_WHEEL = 85,
		VEHICLE_HORN = 86,
		VEHICLE_FLY_THROTTLE_UP = 87,
		VEHICLE_FLY_THROTTLE_DOWN = 88,
		VEHICLE_FLY_YAW_LEFT = 89,
		VEHICLE_FLY_YAW_RIGHT = 90,
		VEHICLE_PASSENGER_AIM = 91,
		VEHICLE_PASSENGER_ATTACK = 92,
		VEHICLE_SPECIAL_ABILITY_FRANKLIN = 93,
		VEHICLE_STUNT_UP_DOWN = 94,
		VEHICLE_CINEMATIC_UP_DOWN = 95,
		VEHICLE_CINEMATIC_UP_ONLY = 96,
		VEHICLE_CINEMATIC_DOWN_ONLY = 97,
		VEHICLE_CINEMATIC_LEFT_RIGHT = 98,
		VEHICLE_SELECT_NEXT_WEAPON = 99,
		VEHICLE_SELECT_PREV_WEAPON = 100,
		VEHICLE_ROOF = 101,
		VEHICLE_JUMP = 102,
		VEHICLE_GRAPPLING_HOOK = 103,
		VEHICLE_SHUFFLE = 104,
		VEHICLE_DROP_PROJECTILE = 105,
		VEHICLE_MOUSE_CONTROL_OVERRIDE = 106,
		VEHICLE_FLY_ROLL_LEFT_RIGHT = 107,
		VEHICLE_FLY_ROLL_LEFT_ONLY = 108,
		VEHICLE_FLY_ROLL_RIGHT_ONLY = 109,
		VEHICLE_FLY_PITCH_UP_DOWN = 110,
		VEHICLE_FLY_PITCH_UP_ONLY = 111,
		VEHICLE_FLY_PITCH_DOWN_ONLY = 112,
		VEHICLE_FLY_UNDER_CARRIAGE = 113,
		VEHICLE_FLY_ATTACK = 114,
		VEHICLE_FLY_SELECT_NEXT_WEAPON = 115,
		VEHICLE_FLY_SELECT_PREV_WEAPON = 116,
		VEHICLE_FLY_SELECT_TARGET_LEFT = 117,
		VEHICLE_FLY_SELECT_TARGET_RIGHT = 118,
		VEHICLE_FLY_VERTICAL_FLIGHT_MODE = 119,
		VEHICLE_FLY_DUCK = 120,
		VEHICLE_FLY_ATTACK_CAMERA = 121,
		VEHICLE_FLY_MOUSE_CONTROL_OVERRIDE = 122,
		VEHICLE_SUB_TURN_LEFT_RIGHT = 123,
		VEHICLE_SUB_TURN_LEFT_ONLY = 124,
		VEHICLE_SUB_TURN_RIGHT_ONLY = 125,
		VEHICLE_SUB_PITCH_UP_DOWN = 126,
		VEHICLE_SUB_PITCH_UP_ONLY = 127,
		VEHICLE_SUB_PITCH_DOWN_ONLY = 128,
		VEHICLE_SUB_THROTTLE_UP = 129,
		VEHICLE_SUB_THROTTLE_DOWN = 130,
		VEHICLE_SUB_ASCEND = 131,
		VEHICLE_SUB_DESCEND = 132,
		VEHICLE_SUB_TURN_HARD_LEFT = 133,
		VEHICLE_SUB_TURN_HARD_RIGHT = 134,
		VEHICLE_SUB_MOUSE_CONTROL_OVERRIDE = 135,
		VEHICLE_PUSHBIKE_PEDAL = 136,
		VEHICLE_PUSHBIKE_SPRINT = 137,
		VEHICLE_PUSHBIKE_FRONT_BRAKE = 138,
		VEHICLE_PUSHBIKE_REAR_BRAKE = 139,
		MELEE_ATTACK_LIGHT = 140,
		MELEE_ATTACK_HEAVY = 141,
		MELEE_ATTACK_ALTERNATE = 142,
		MELEE_BLOCK = 143,
		PARACHUTE_DEPLOY = 144,
		PARACHUTE_DETACH = 145,
		PARACHUTE_TURN_LEFT_RIGHT = 146,
		PARACHUTE_TURN_LEFT_ONLY = 147,
		PARACHUTE_TURN_RIGHT_ONLY = 148,
		PARACHUTE_PITCH_UP_DOWN = 149,
		PARACHUTE_PITCH_UP_ONLY = 150,
		PARACHUTE_PITCH_DOWN_ONLY = 151,
		PARACHUTE_BRAKE_LEFT = 152,
		PARACHUTE_BRAKE_RIGHT = 153,
		PARACHUTE_SMOKE = 154,
		PARACHUTE_PRECISION_LANDING = 155,
		MAP = 156,
		SELECT_WEAPON_UNARMED = 157,
		SELECT_WEAPON_MELEE = 158,
		SELECT_WEAPON_HANDGUN = 159,
		SELECT_WEAPON_SHOTGUN = 160,
		SELECT_WEAPON_SMG = 161,
		SELECT_WEAPON_AUTO_RIFLE = 162,
		SELECT_WEAPON_SNIPER = 163,
		SELECT_WEAPON_HEAVY = 164,
		SELECT_WEAPON_SPECIAL = 165,
		SELECT_CHARACTER_MICHAEL = 166,
		SELECT_CHARACTER_FRANKLIN = 167,
		SELECT_CHARACTER_TREVOR = 168,
		SELECT_CHARACTER_MULTIPLAYER = 169,
		SAVE_REPLAY_CLIP = 170,
		SPECIALABILITY_PC = 171,
		PHONE_UP = 172,
		PHONE_DOWN = 173,
		PHONE_LEFT = 174,
		PHONE_RIGHT = 175,
		PHONE_SELECT = 176,
		PHONE_CANCEL = 177,
		PHONE_OPTION = 178,
		PHONE_EXTRA_OPTION = 179,
		PHONE_SCROLL_FORWARD = 180,
		PHONE_SCROLL_BACKWARD = 181,
		PHONE_CAMERA_FOCUS_LOCK = 182,
		PHONE_CAMERA_GRID = 183,
		PHONE_CAMERA_SELFIE = 184,
		PHONECAMERA_DOF = 185,
		PHONE_CAMERA_EXPRESSION = 186,
		FRONTEND_DOWN = 187,
		FRONTEND_UP = 188,
		FRONTEND_LEFT = 189,
		FRONTEND_RIGHT = 190,
		FRONTEND_RDOWN = 191,
		FRONTEND_RUP = 192,
		FRONTEND_RLEFT = 193,
		FRONTEND_RRIGHT = 194,
		FRONTEND_AXIS_X = 195,
		FRONTEND_AXIS_Y = 196,
		FRONTEND_RIGHT_AXIS_X = 197,
		FRONTEND_RIGHT_AXIS_Y = 198,
		FRONTEND_PAUSE = 199,
		FRONTEND_PAUSE_ALTERNATE = 200,
		FRONTEND_ACCEPT = 201,
		FRONTEND_CANCEL = 202,
		FRONTEND_X = 203,
		FRONTEND_Y = 204,
		FRONTEND_LB = 205,
		FRONTEND_RB = 206,
		FRONTEND_LT = 207,
		FRONTEND_RT = 208,
		FRONTEND_LS = 209,
		FRONTEND_RS = 210,
		FRONTEND_LEADERBOARD = 211,
		FRONTEND_SOCIAL_CLUB = 212,
		FRONTEND_SOCIAL_CLUB_SECONDARY = 213,
		FRONTEND_DELETE = 214,
		FRONTEND_ENDSCREEN_ACCEPT = 215,
		FRONTEND_ENDSCREEN_EXPAND = 216,
		FRONTEND_SELECT = 217,
		SCRIPT_LEFT_AXIS_X = 218,
		SCRIPT_LEFT_AXIS_Y = 219,
		SCRIPT_RIGHT_AXIS_X = 220,
		SCRIPT_RIGHT_AXIS_Y = 221,
		SCRIPTR_UP = 222,
		SCRIPTR_DOWN = 223,
		SCRIPTR_LEFT = 224,
		SCRIPTR_RIGHT = 225,
		SCRIPT_LB = 226,
		SCRIPT_RB = 227,
		SCRIPT_LT = 228,
		SCRIPT_RT = 229,
		SCRIPT_LS = 230,
		SCRIPT_RS = 231,
		SCRIPT_PAD_UP = 232,
		SCRIPT_PAD_DOWN = 233,
		SCRIPT_PAD_LEFT = 234,
		SCRIPT_PAD_RIGHT = 235,
		SCRIPT_SELECT = 236,
		CURSOR_ACCEPT = 237,
		CURSOR_CANCEL = 238,
		CURSOR_X = 239,
		CURSOR_Y = 240,
		CURSOR_SCROLL_UP = 241,
		CURSOR_SCROLL_DOWN = 242,
		ENTER_CHEAT_CODE = 243,
		INTERACTION_MENU = 244,
		MP_TEXT_CHAT_ALL = 245,
		MP_TEXT_CHAT_TEAM = 246,
		MP_TEXT_CHAT_FRIENDS = 247,
		MP_TEXT_CHAT_CREW = 248,
		PUSH_TO_TALK = 249,
		CREATOR_LS = 250,
		CREATOR_RS = 251,
		CREATOR_LT = 252,
		CREATOR_RT = 253,
		CREATOR_MENU_TOGGLE = 254,
		CREATOR_ACCEPT = 255,
		CREATOR_DELETE = 256,
		ATTACK2 = 257,
		RAPPEL_JUMP = 258,
		RAPPEL_LONG_JUMP = 259,
		RAPPEL_SMASH_WINDOW = 260,
		PREV_WEAPON = 261,
		NEXT_WEAPON = 262,
		MELEE_ATTACK1 = 263,
		MELEE_ATTACK2 = 264,
		WHISTLE = 265,
		MOVE_LEFT = 266,
		MOVE_RIGHT = 267,
		MOVE_UP = 268,
		MOVE_DOWN = 269,
		LOOK_LEFT = 270,
		LOOK_RIGHT = 271,
		LOOK_UP = 272,
		LOOK_DOWN = 273,
		SNIPER_ZOOM_IN = 274,
		SNIPER_ZOOM_OUT = 275,
		SNIPER_ZOOM_IN_ALTERNATE = 276,
		SNIPER_ZOOM_OUT_ALTERNATE = 277,
		VEHICLE_MOVE_LEFT = 278,
		VEHICLE_MOVE_RIGHT = 279,
		VEHICLE_MOVE_UP = 280,
		VEHICLE_MOVE_DOWN = 281,
		VEHICLE_GUN_LEFT = 282,
		VEHICLE_GUN_RIGHT = 283,
		VEHICLE_GUN_UP = 284,
		VEHICLE_GUN_DOWN = 285,
		VEHICLE_LOOK_LEFT = 286,
		VEHICLE_LOOK_RIGHT = 287,
		REPLAY_START_STOP_RECORDING = 288,
		REPLAY_START_STOP_RECORDING_SECONDARY = 289,
		SCALED_LOOK_LEFT_RIGHT = 290,
		SCALED_LOOK_UP_DOWN = 291,
		SCALED_LOOK_UP_ONLY = 292,
		SCALED_LOOK_DOWN_ONLY = 293,
		SCALED_LOOK_LEFT_ONLY = 294,
		SCALED_LOOK_RIGHT_ONLY = 295,
		REPLAY_MARKER_DELETE = 296,
		REPLAY_CLIP_DELETE = 297,
		REPLAY_PAUSE = 298,
		REPLAY_REWIND = 299,
		REPLAY_FFWD = 300,
		REPLAY_NEWMARKER = 301,
		REPLAY_RECORD = 302,
		REPLAY_SCREENSHOT = 303,
		REPLAY_HIDEHUD = 304,
		REPLAY_STARTPOINT = 305,
		REPLAY_ENDPOINT = 306,
		REPLAY_ADVANCE = 307,
		REPLAY_BACK = 308,
		REPLAY_TOOLS = 309,
		REPLAY_RESTART = 310,
		REPLAY_SHOWHOTKEY = 311,
		REPLAY_CYCLE_MARKER_LEFT = 312,
		REPLAY_CYCLE_MARKER_RIGHT = 313,
		REPLAY_FOV_INCREASE = 314,
		REPLAY_FOV_DECREASE = 315,
		REPLAY_CAMERA_UP = 316,
		REPLAY_CAMERA_DOWN = 317,
		REPLAY_SAVE = 318,
		REPLAY_TOGGLETIME = 319,
		REPLAY_TOGGLETIPS = 320,
		REPLAY_PREVIEW = 321,
		REPLAY_TOGGLE_TIMELINE = 322,
		REPLAY_TIMELINE_PICKUP_CLIP = 323,
		REPLAY_TIMELINE_DUPLICATE_CLIP = 324,
		REPLAY_TIMELINE_PLACE_CLIP = 325,
		REPLAY_CTRL = 326,
		REPLAY_TIMELINE_SAVE = 327,
		REPLAY_PREVIEW_AUDIO = 328,
		VEHICLE_DRIVE_LOOK = 329,
		VEHICLE_DRIVE_LOOK2 = 330,
		VEHICLE_FLY_ATTACK2 = 331,
		RADIO_WHEEL_UP_DOWN = 332,
		RADIO_WHEEL_LEFT_RIGHT = 333,
		VEHICLE_SLOW_MO_UP_DOWN = 334,
		VEHICLE_SLOW_MO_UP_ONLY = 335,
		VEHICLE_SLOW_MO_DOWN_ONLY = 336,
		MAP_POINT_OF_INTEREST = 337,
		REPLAY_SNAPMATIC_PHOTO = 338,
		VEHICLE_CAR_JUMP = 339,
		VEHICLE_ROCKET_BOOST = 340,
		VEHICLE_PARACHUTE = 341,
		VEHICLE_BIKE_WINGS = 342
	}
}
