/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import {LayoutComponent} from '@ibm-wch-sdk/ng';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {TypeDesignPageComponent} from '../../components/design-page/typeDesignPageComponent';
import {UtilsService} from '../../common/utils/utils.service';

/**
 * @name designPageLeft
 * @id design-page-left
 */
@LayoutComponent({
	selector: 'design-page-left'
})
@Component({
	selector: 'app-design-page-left-layout-component',
	templateUrl: './designPageLeftLayout.html',
	styleUrls: ['./designPageLeftLayout.scss']
})
export class DesignPageLeftLayoutComponent extends TypeDesignPageComponent implements OnInit, OnDestroy {

	constructor(utilService: UtilsService) {
		super(utilService);
	}
}
