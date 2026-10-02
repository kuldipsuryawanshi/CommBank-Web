<<<<<<< HEAD
import { BaseEmoji, Picker } from 'emoji-mart';
// @ts-ignore
import 'emoji-mart/css/emoji-mart.css';
import { useAppSelector } from '../../store/hooks';
import { selectMode } from '../../store/themeSlice';

type Props = { onClick: (emoji: BaseEmoji, event: React.MouseEvent) => void };

export default function EmojiPicker(props: Props) {
  const mode = useAppSelector(selectMode);

  // theme prop ko valid emoji-mart theme value ('light' | 'dark' | 'auto') par fallback kar rahe hain
  const pickerTheme = mode === 'dark' ? 'dark' : 'light';

  return (
    <Picker
      theme={pickerTheme}
=======
import { BaseEmoji, Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import { useAppSelector } from '../../store/hooks'
import { selectMode } from '../../store/themeSlice'

type Props = { onClick: (emoji: BaseEmoji, event: React.MouseEvent) => void }

export default function EmojiPicker(props: Props) {
  const theme = useAppSelector(selectMode)

  return (
    <Picker
      theme={theme}
>>>>>>> upstream/main
      showPreview={false}
      showSkinTones={false}
      onClick={props.onClick}
      color="primary"
    />
<<<<<<< HEAD
  );
}
=======
  )
}
>>>>>>> upstream/main
