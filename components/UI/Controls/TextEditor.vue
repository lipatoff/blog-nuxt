<template>
	<no-ssr>
		<div class="control">
			<label> <slot/> </label>

			<label class="editor-var"><input type="radio" v-model="type" value="html" class="editor-var__button">HTML</label>
			<label class="editor-var"><input type="radio" v-model="type" value="md" class="editor-var__button">MD</label>

			<div class="editor">
				<codemirror 
					v-if="type==='html'"
					@input="onInput"
					:value="value"
					:options="cmOption"
					class="editor__input">
				</codemirror>

				<textarea
					v-else
					v-model="valueMd"
					@input="onInput(valueMd)"
					class="editor__input">
				</textarea>

				<div class="editor__prev html-reset" v-html="value"></div>
			</div>
		</div>
	</no-ssr>			
</template>

<script>
import marked from 'marked'
import europa from 'europa'

export default {
	props: {
		value: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			type: 'html',
			valueMd: '',
        	cmOption: {
        		tabSize: 4,
        		styleActiveLine: true,
        		lineNumbers: true,
        		line: true,
        		keyMap: 'sublime',
				mode: 'text/x-vue',
        		theme: 'default'
			}
    	}
	},
	watch: {
		type(val) {
			if (val==='md') {
				let toMd = new europa()
				this.valueMd = toMd.convert(this.value)
			}
		}
	},
	methods: {
		onInput(val) {
			if (this.type==='md') val = marked(val, { sanitize: true, headerIds: false })
			return this.$emit('input', val)
		}
	}
}
</script>

<style lang="scss">
.editor{
	display: flex;
	justify-content: space-between;
	&__input, &__prev{
		width: 49%;
		padding: 30px 27px;
		border-radius: 14px;
		border: 1px solid #DCDFE6;
		max-height: 50vh;
		overflow: auto;
	}
	&__input{
		height: 362px;
		background-color: #fff;
		padding-left: 10px;
	}
}
.editor-var{
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
	padding: 10px;
	&__button{
		width: 20px;
		margin: 0;
	}
}
</style>
