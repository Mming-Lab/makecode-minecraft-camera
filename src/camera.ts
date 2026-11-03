
enum Easing {
    //% block=""
    //% jres alias = ""
    in_quad,
    //% block=""
    //% jres alias = ""
    out_quad,
    //% block=""
    //% jres alias = ""
    in_out_quad,
    //% block=""
    //% jres alias = ""
    in_cubic,
    //% block=""
    //% jres alias = ""
    out_cubic,
    //% block=""
    //% jres alias = ""
    in_out_cubic,
    //% block=""
    //% jres alias = ""
    in_quart,
    //% block=""
    //% jres alias = ""
    out_quart,
    //% block=""
    //% jres alias = ""
    in_out_quart,
    //% block=""
    //% jres alias = ""
    in_quint,
    //% block=""
    //% jres alias = ""
    out_quint,
    //% block=""
    //% jres alias = ""
    in_out_quint,
    //% block=""
    //% jres alias = ""
    in_sine,
    //% block=""
    //% jres alias = ""
    out_sine,
    //% block=""
    //% jres alias = ""
    in_out_sine,
    //% block=""
    //% jres alias = ""
    in_expo,
    //% block=""
    //% jres alias = ""
    out_expo,
    //% block=""
    //% jres alias = ""
    in_out_expo,
    //% block=""
    //% jres alias = ""
    in_circ,
    //% block=""
    //% jres alias = ""
    out_circ,
    //% block=""
    //% jres alias = ""
    in_out_circ,
    //% block=""
    //% jres alias = ""
    in_bounce,
    //% block=""
    //% jres alias = ""
    out_bounce,
    //% block=""
    //% jres alias = ""
    in_out_bounce,
    //% block=""
    //% jres alias = ""
    in_back,
    //% block=""
    //% jres alias = ""
    out_back,
    //% block=""
    //% jres alias = ""
    in_out_back,
    //% block=""
    //% jres alias = ""
    in_elastic,
    //% block=""
    //% jres alias = ""
    out_elastic,
    //% block=""
    //% jres alias = ""
    in_out_elastic,
    //% block=""
    //% jres alias = ""
    linear,
    //% block=""
    //% jres alias = ""
    spring
}

//%  block="Camera" weight=1 color=#54bfff icon=""
namespace Camera {

    //% block="End camera after %time seconds"
    //% time.defl=0
    //% weight=1000
    export function CameraClear(time: number): void {
        loops.pause(time * 1000)//待機
        // camera <players: target> clear
        _camera(`clear`);
    }



    //% block="Move camera to:%pos=minecraftCreateWorldPosition"
    //% weight=990
    export function Pos(pos: Position): void {
        // camera <players: target> set <preset: string> pos <position: x y z>
        _setFree(`pos ${pos}`);
    }

    //% group="Camera Angles"
    //% block="Move camera to:%pos=minecraftCreateWorldPosition| look at:%facing"
    //% weight=980
    export function FacingEntity(pos: Position, facing: TargetSelectorKind): void {
        // camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtEntity: target>
        _setFree(`pos ${pos} facing ${mobs.target(facing)}`);
    }

    //% group="Camera Angles"
    //% block="Move camera to:%pos=minecraftCreateWorldPosition| look at position:%facing=minecraftCreateWorldPosition"
    //% weight=970
    export function FacingPosition(pos: Position, facing: Position): void {
        // camera <players: target> set <preset: string> pos <position: x y z> facing <lookAtPosition: x y z>
        _setFree(`pos ${pos} facing ${facing}`);
    }

    //% group="Camera Angles"
    //% block="Move camera to:%pos=minecraftCreateWorldPosition| angle| up/down:%xRot left/right:%yRot"
    //% xRot.min=-90 xRot.max=90
    //% yRot.min=-180 yRot.max=180
    //% weight=960
    export function Rot(pos: Position, xRot: number, yRot: number): void {
        // camera <players: target> set <preset: string> pos <position: x y z> rot <xRot: value> <yRot: value>
        _setFree(`pos ${pos} rot ${xRot} ${yRot}`);
    }



    //% group="Camera Work"
    //% blockId=minecraftCameraEasePosition
    //% block="Smooth move| Camera:%pos=minecraftCreateWorldPosition| look at position:%facing=minecraftCreateWorldPosition| movement style:%easeType| time(s):%easeTime| back to my view after:%isClear|| wait until done:%isPause"
    //% easeTime.defl=3
    //% easeType.fieldEditor="gridpicker"
    //% easeType.fieldOptions.width=90
    //% easeType.fieldOptions.columns=3
    //% easeType.fieldOptions.maxRows="6"
    //% isPause.defl=true
    //% isPause.shadow=toggleOnOff
    //% isClear.defl=false
    //% isClear.shadow=toggleOnOff
    //% weight=890
    export function EasePosition(pos: Position, facing: Position, easeType: Easing, easeTime: number, isClear: boolean = true, isPause: boolean = true): void {
        // camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtPosition: x y z>
        _ease(`pos ${pos} facing ${facing}`, easeType, easeTime, isClear, isPause);
    }

    //% group="Camera Work"
    //% block="Smooth track| Camera:%pos=minecraftCreateWorldPosition| look at:%facing| movement style:%easeType| time(s):%easeTime| back to my view after:%isClear|| wait until done:%isPause"
    //% easeTime.defl=3
    //% easeType.fieldEditor="gridpicker"
    //% easeType.fieldOptions.width=90
    //% easeType.fieldOptions.columns=3
    //% easeType.fieldOptions.maxRows="6"
    //% isPause.defl=true
    //% isPause.shadow=toggleOnOff
    //% isClear.defl=false
    //% isClear.shadow=toggleOnOff
    //% weight=880
    export function EaseEntity(pos: Position, facing: TargetSelectorKind, easeType: Easing, easeTime: number, isClear: boolean = true, isPause: boolean = true): void {
        // camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>
        _ease(`pos ${pos} facing ${mobs.target(facing)}`, easeType, easeTime, isClear, isPause);
    }

    //% group="Camera Work"
    //% block="Smooth rotate| Camera:%pos=minecraftCreateWorldPosition| up/down:%xRot left/right:%yRot| movement style:%easeType| time(s):%easeTime| back to my view after:%isClear|| wait until done:%isPause"
    //% xRot.min=-90 xRot.max=90
    //% yRot.min=-180 yRot.max=180
    //% easeTime.defl=3
    //% easeType.fieldEditor="gridpicker"
    //% easeType.fieldOptions.width=90
    //% easeType.fieldOptions.columns=3
    //% easeType.fieldOptions.maxRows="6"
    //% isPause.defl=true
    //% isPause.shadow=toggleOnOff
    //% isClear.defl=false
    //% isClear.shadow=toggleOnOff
    //% weight=870
    export function EaseRot(pos: Position, xRot: number, yRot: number, easeType: Easing, easeTime: number, isClear: boolean = true, isPause: boolean = true): void {
        // camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> rot <xRot: value> <yRot: value>
        _ease(`pos ${pos} rot ${xRot} ${yRot}`, easeType, easeTime, isClear, isPause);
    }

    //% group="Fade"
    //% block="Screen effect| fade to dark(s):%fadeInSeconds| hold(s):%holdSeconds| fade to light(s):%fadeOutSeconds| color:%colorCode=colorNumberPicker| end:%isClear"
    //% fadeInSeconds.defl=1
    //% holdSeconds.defl=1
    //% fadeOutSeconds.defl=0
    //% colorCode.defl=0x000000
    //% isClear.defl=false
    //% isClear.shadow=toggleOnOff
    //% weight=790
    export function fadeTime(fadeInSeconds: number, holdSeconds: number, fadeOutSeconds: number, colorCode: number, isClear: boolean): void {
        const red = (colorCode >> 16) & 0xFF;
        const green = (colorCode >> 8) & 0xFF;
        const blue = colorCode & 0xFF;
        //camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>
        _camera(`fade time ${fadeInSeconds} ${holdSeconds} ${fadeOutSeconds} color ${red} ${green} ${blue}`);
        loops.pause((fadeInSeconds + holdSeconds + fadeOutSeconds) * 1000)//待機
        if (isClear) {
            CameraClear(0); //カメラワーク取消
        }
    }

    //% group="Fade"
    //% block="make color| red%red| green%green| blue%blue"
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    //% weight=780
    export function rgb(red: number, green: number, blue: number): number {
        return ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF);
    }

    //% group="Fade"
    //% block="%color=colorNumberPicker"
    //% color.defl=0xff0000
    //% weight=770
    export function setcolors(color: number): number {
        return color;
    }


    //% group="Camera Presets"
    //% block="First-person view"
    //% weight=760
    export function FirstPersonView(): void {
        _setPreset("minecraft:first_person");
    }

    //% group="Camera Presets"
    //% block="Third-person view"
    //% weight=750
    export function ThirdPersonView(): void {
        _setPreset("minecraft:third_person");
    }

    //% group="Camera Presets"
    //% block="Front view"
    //% weight=740
    export function FrontView(): void {
        _setPreset("minecraft:third_person_front");
    }


    //% group="Input Control"
    //% block="Player movement %enabled"
    //% enabled.shadow=toggleOnOff
    //% weight=730
    export function SetMovement(enabled: boolean): void {
        _setInputPermission("movement", enabled);
    }

    //% group="Input Control"
    //% block="Camera control %enabled"
    //% enabled.shadow=toggleOnOff
    //% weight=720
    export function SetCameraControl(enabled: boolean): void {
        _setInputPermission("camera", enabled);
    }

    export function _getEasingId(id: Easing) {
        switch (id) {
            case Easing.linear: return "linear";
            case Easing.spring: return "spring";
            case Easing.in_quad: return "in_quad";
            case Easing.out_quad: return "out_quad";
            case Easing.in_out_quad: return "in_out_quad";
            case Easing.in_cubic: return "in_cubic";
            case Easing.out_cubic: return "out_cubic";
            case Easing.in_out_cubic: return "in_out_cubic";
            case Easing.in_quart: return "in_quart";
            case Easing.out_quart: return "out_quart";
            case Easing.in_out_quart: return "in_out_quart";
            case Easing.in_quint: return "in_quint";
            case Easing.out_quint: return "out_quint";
            case Easing.in_out_quint: return "in_out_quint";
            case Easing.in_sine: return "in_sine";
            case Easing.out_sine: return "out_sine";
            case Easing.in_out_sine: return "in_out_sine";
            case Easing.in_expo: return "in_expo";
            case Easing.out_expo: return "out_expo";
            case Easing.in_out_expo: return "in_out_expo";
            case Easing.in_circ: return "in_circ";
            case Easing.out_circ: return "out_circ";
            case Easing.in_out_circ: return "in_out_circ";
            case Easing.in_bounce: return "in_bounce";
            case Easing.out_bounce: return "out_bounce";
            case Easing.in_out_bounce: return "in_out_bounce";
            case Easing.in_back: return "in_back";
            case Easing.out_back: return "out_back";
            case Easing.in_out_back: return "in_out_back";
            case Easing.in_elastic: return "in_elastic";
            case Easing.out_elastic: return "out_elastic";
            case Easing.in_out_elastic: return "in_out_elastic";
            default:
                player.errorMessage("Unknown Easing enum value");
                return undefined;
        }
    }


    // カメラコマンドを送るたびに増える番号。後から別の命令が来たかを見分けるのに使う
    let _cameraCount = 0;

    // camera @s <args> を実行
    function _camera(args: string): void {
        _cameraCount++;
        player.execute(`camera @s ${args}`);
    }

    // free カメラに切り替えて pos / rot / facing などを指定
    function _setFree(args: string): void {
        _camera(`set minecraft:free ${args}`);
    }

    // free カメラをイージングで動かし、必要なら待機・カメラ終了
    function _ease(args: string, easeType: Easing, easeTime: number, isClear: boolean, isPause: boolean): void {
        _setFree(`ease ${easeTime} ${_getEasingId(easeType)} ${args}`);
        if (isPause) {
            loops.pause(easeTime * 1000)//待機
            if (isClear) {
                CameraClear(0); //カメラワーク取消
            }
        } else if (isClear) {
            // 待たないときは、動き終わってから裏でカメラを終了する。
            // その間に次のカメラ命令が来ていたら、それを消さないように終了しない
            const count = _cameraCount;
            loops.runInBackground(() => {
                loops.pause(easeTime * 1000)
                if (count == _cameraCount) {
                    CameraClear(0);
                }
            });
        }
    }

    // camera <players: target> set <preset: string>
    function _setPreset(preset: string): void {
        _camera(`set ${preset}`);
    }

    // inputpermission set <targets: target> <permission: permission> <state: state>
    function _setInputPermission(permission: string, enabled: boolean): void {
        const state = enabled ? "enabled" : "disabled";
        player.execute(`inputpermission set @s ${permission} ${state}`);
    }
}
