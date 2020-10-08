/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { AssetData } from './buildBundle';
declare type ImageSet = {
    basePath: string;
    files: {
        name: string;
        scale: number;
    }[];
};
export default function getImageSetIOS(catalogDir: string, asset: AssetData): ImageSet;
export {};
//# sourceMappingURL=getImageSetIOS.d.ts.map