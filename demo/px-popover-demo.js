/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-demo/css/px-demo-content-helper-styles.js';
import '../px-popover.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-demo-content-helper-styles"></style>

    <!-- Header -->
    <px-demo-header module-name="px-popover" description="The popover is similar to a tooltip, but is invoked by clicking instead of hovering on a target component. Popovers have an optional title, and can also contain richer content – longer or formatted text, labels, badges, etc. Popovers stay visible on screen until the user clicks outside of the popover." desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <div>
          <button class="btn btn--tertiary" id="{{props.for.value}}" type="button" name="button">Click here</button>
          <px-popover for="{{props.for.value}}" popover-title="{{props.popoverTitle.value}}" popover-body="{{props.popoverBody.value}}" orientation="{{props.orientation.value}}" show-overlay="{{props.showOverlay.value}}" scroll-action="{{props.scrollAction.value}}" enhanced="{{props.enhanced.value}}">
            <template is="dom-if" if="[[isCustom(chosenConfig)]]">
                <form><label>This is a form<input class="text-input" type="text" value="Text Input"></label></form>
            </template>
          </px-popover>
        </div>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-popover">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-popover" hide="[&quot;assignParentResizable&quot;,&quot;notifyResize&quot;,&quot;resizerShouldNotify&quot;,&quot;stopResizeNotificationsFor&quot;]"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-popover-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          { configName: "Default",
            configReset: true },

          { configName: "Bottom",
            for: "btn1",
            orientation: "bottom",
            position: "absolute",
            popoverTitle: "This is a bottom popover",
            popoverBody: "This is a bottom popover body",
            showOverlay: true,
            enhanced: false,
            lightDomContent: "",
            siblingElement: "<button class='btn btn--tertiary' id='btn1' type='button' name='button'>Click here</button>" },

          { configName: "Custom content",
            for: "btn1",
            orientation: "bottom",
            position: "absolute",
            popoverTitle: "",
            popoverBody: "",
            showOverlay: false,
            enhanced: true,
            lightDomContent: "<form><label>This is a form<input class='text-input' type='text' value='Text Input'/></label></form>",
            siblingElement: "<button class='btn btn--tertiary' id='btn1' type='button' name='button'>Click here</button>" }
        ]
      }
    }
  },

  /**
   * A reference for `this.props`. Read the documentation there.
   */
  demoProps: {

    showOverlay: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    enhanced: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    orientation: {
      type: String,
      defaultValue: 'right',
      inputType: 'dropdown',
      inputChoices: ['left', 'right', 'top', 'bottom', 'auto']
    },

    scrollAction: {
      type: String,
      defaultValue: 'lock',
      inputType: 'dropdown',
      inputChoices: ['cancel', 'lock']
    },

    for: {
      type: String,
      defaultValue: 'btn1'
    },

    popoverTitle: {
      type: String,
      defaultValue: 'This is a px-popover',
      inputType: 'text'
    },

    popoverBody: {
      type: String,
      defaultValue: 'The popover-body is displayed here.',
      inputType: 'text'
    },

    siblingElement: {
      type: String,
      defaultValue: "<button class='btn btn--tertiary' id='btn1' type='button' name='button'>Click here</button>"
    },

    lightDomContent: {
      type: String,
      defaultValue: ""
    }
  },

  isCustom: function(config) {
    return config.configName === 'Custom content';
  }
});
