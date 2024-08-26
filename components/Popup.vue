<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const {popup_detail} = defineProps(['popup_detail'])

const emit = defineEmits(["supprimer"])

function supprimer(id:string) {
  console.log("emit suppression")
  emit("supprimer",id)
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
        <Button>Supprimer</Button>   
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Vous allez supprimer le fichier {{ popup_detail.name }}</AlertDialogTitle>
        <AlertDialogDescription>
          Cette action est irreversible.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="supprimer(popup_detail.id)">Supprimer</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>